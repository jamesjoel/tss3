<?php
include("db.php");

if(! isset($_SESSION['is_user_logged_in']))
{
	header("location:login.php");
}


include("header.php");
?>
<div class="container">
	<div class="col-md-9">
		<h5 class="my-bg p-2">Account</h5>
			<div class="row">
				<div class="col-md-12 login-content">
					
					<br />
					<h4>Welcome : <?php echo $_SESSION['name']; ?></h4>
				</div>
			</div>
		</div>
	</div>
</div>

<?php
include("footer.php");
?>