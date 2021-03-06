<?php 
	class User extends CI_Controller{
		function __construct()
		{
			parent::__construct();
			$this->load->helper("url");
			$this->load->library("session");
			$this->load->model("usermod");
			$this->backdoor();
			$this->id = $this->session->userdata("id");
		}
		function index()
		{
			$pagedata['title']="Dashboard";
			$pagedata['pagename']="user/dashboard";
			$this->load->view("layout", $pagedata);
		}
		function backdoor()
		{
			if(! $this->session->userdata("is_user_logged_in"))
			{
				redirect("home/login");
			}
		}

		function logout()
		{
			$this->session->sess_destroy();
			redirect("home/login");
		}
		function profile()
		{
			$id = $this->session->userdata('id');
			$result = $this->usermod->select_by_id($id);
			$pagedata['title']="My Profile";
			$pagedata['pagename']="user/profile";
			$pagedata['data']=$result->row_array();

			$this->load->view("layout", $pagedata);
		}
		
		function edit()
		{
			$id = $this->session->userdata('id');
			$result = $this->usermod->select_by_id($id);
			$pagedata['title']="Edit Profile";
			$pagedata['pagename']="user/edit";
			$pagedata['data']=$result->row_array();
			$this->load->view("layout", $pagedata);
		}
		function update_pass()
		{
			// print_r($this->input->post());
			// die;
			$a = $this->input->post("c_pass");
			$b = $this->input->post("n_pass");
			$c = $this->input->post("cn_pass");

			$data = $this->usermod->select_by_id($this->id)->row_array();
			if($data['password']==sha1($a))
			{
				if($b == $c)
				{
					$arr['password']=sha1($b);
					$this->usermod->update_by_id($this->id, $arr);
					redirect("user/profile");
				}
				else
				{
					$this->session->set_flashdata("msg2", "Dosen't Match Your New Password & Conform New password");
					redirect("user/change_pass");
				}
			}
				else
				{
					$this->session->set_flashdata("msg1", "Dosen't Match Your Current Password");
					redirect("user/change_pass");
				}
			}

		
		function change_pass()
		{
			$pagedata['title']="change password";
			$pagedata['pagename']="user/change_pass";
			$this->load->view("layout", $pagedata);
		}

		function update()
		{
			$id = $this->session->userdata('id');
			$data = $this->input->post();
			$data['address']=$data['add'];
			unset($data['add']);
			$this->usermod->update_by_id($id, $data);
			redirect("user/profile");

		}
	}
?>