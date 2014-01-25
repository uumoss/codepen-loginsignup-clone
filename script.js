/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.api.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {

	codepen.objects.User = {
		name: null,
		email: null,
		username: null,
		password: null,
	}

	var NewUser = Object.create(codepne.objects.User, {
		firstname: {
			writable: true,
			enumerable: true,
			value: ''
		}
		lastname: {
			writable: true,
			enumerable: true,
			value: ''
		}
	});

	
	$('.signup-form').hide();
	$('.signup-form-btn').click(function(){
		$('.login-form').hide();
		$('.signup-form').show();
		$('.login-form-btn').removeClass('active');
		$('.signup-form-btn').addClass('active');
	})
	$('.login-form-btn').click(function(){
		$('.login-form').show();
		$('.signup-form').hide();
		$('.login-form-btn').addClass('active');
		$('.signup-form-btn').removeClass('active');
	});

	$('.btn-login').click(function(){
		var loginUser = {};
			loginUser.username = $('#login-username-field').val();
			loginUser.password = $('#login-password-field').val();
			console.log((codepen.api.login(loginUser)));
	});

	$('.btn-signup').click(function(){
		var signupUser = {};
			signupUser.name = $('#signup-name-field').val();
			signupUser.email = $('#signup-email-field').val();
			signupUser.username = $('#signup-username-field').val();
			signupUser.password = $('#signup-password-field').val();
			signupUser.password = $('#signup-password-field').val();
			console.log((codepen.api.signup(signupUser)));
	});


});