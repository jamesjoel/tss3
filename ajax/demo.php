<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript" src="jquery.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			$("button").click(function(){
				$.ajax({
					url : "getRow.php",
					type : "get",
					success : function(response){
						//alert(response);
						$("h1").html(response);
					}
				})
			});
		});
	</script>jfdhgkjdfgnkfd
</head>
<body>
<button>OK</button>
<h1></h1>
</body>
</html>
