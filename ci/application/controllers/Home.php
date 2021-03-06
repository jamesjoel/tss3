<?php
class Home extends CI_Controller{
	function __construct()
	{
		parent::__construct();
		$this->load->helper("url");
		$this->load->library("session");

	}

	function about()
	{
		$pagedata["pagename"]="about";
		$pagedata['title']="About Page";
		$this->load->view("layout", $pagedata);
	}
	function contact()
	{
		
		$pagedata["pagename"]="contact";
		$pagedata['title']="Contact Page";
		$this->load->view("layout", $pagedata);
	}
	function index()
	{
		
		$pagedata["pagename"]="home";
		$pagedata['title']="Home Page";
		$this->load->view("layout", $pagedata);
	}
	function login()
	{
		$pagedata["pagename"]="login";
		$pagedata['title']="Login Page";
		$this->load->view("layout", $pagedata);
	}
	
	function signup()
	{
		
		$this->load->library("form_validation");

		$this->form_validation->set_rules("full_name", "Full Name", "required");
		$this->form_validation->set_rules("username", "Email/Username", "required|valid_email");
		$this->form_validation->set_rules("password", "Password", "required");
		$this->form_validation->set_rules("re_pass", "Re-Password", "required|matches[password]");


		$this->form_validation->set_rules("contact", "Contact", "required|numeric|exact_length[10]");
		$this->form_validation->set_rules("add", "Address", "required");
		$this->form_validation->set_rules("city", "City", "required");
		$this->form_validation->set_rules("gender", "Gender", "required");
		if($this->form_validation->run()==false)
		{
			$pagedata["pagename"]="signup";
			$pagedata['title']="Signup Page";
			$this->load->view("layout", $pagedata);
		}
		else
		{

			// print_r($this->input->post());
			/*$data["full_name"]=$this->input->post("f_name");
			$data["username"]=$this->input->post("email");
			$data["password"]=$this->input->post("pass");
			$data["address"]=$this->input->post("add");
			$data["contact"]=$this->input->post("contact");
			$data["city"]=$this->input->post("city");
			$data["gender"]=$this->input->post("gender");*/

			$data = $this->input->post();
			$data['address']=$data['add'];
			$data['password']=sha1($data['password']);
			unset($data['add']);
			unset($data['re_pass']);
			$this->load->model("usermod");
			$this->usermod->save($data);
			redirect("home/login");




		}

	}
	function auth()
	{
		// print_r($this->input->post());
		$u = $this->input->post("email");
		$p = $this->input->post("pass");
		$this->load->model("usermod");
		$result=$this->usermod->select_by_username($u);

		if($result->num_rows()==1)
		{
			$data = $result->row_array();
			if($data['password']==sha1($p))
			{
				if($data['status']==1)
				{

				$this->session->set_userdata("id", $data['id']);
				$this->session->set_userdata("name", $data['full_name']);
				$this->session->set_userdata("is_user_logged_in", true);
				redirect("user");
				}
				else
				{
					$this->session->set_flashdata("msg", "Your Account is Deativated !");
					redirect("home/login");				
				}
			}
			else
			{
				$this->session->set_flashdata("msg", "This Password is Incorrect");
				redirect("home/login");		
			}
		}
		else
		{
			$this->session->set_flashdata("msg", "This Username and Password Incorrect");
			redirect("home/login");
		}

	}
}
?>
