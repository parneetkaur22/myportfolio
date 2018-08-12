<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Home extends CI_Controller 
{
	public function __construct()
	{	
	parent::__construct();
	$this->load->database();
	$this->load->model('Main_model');
	$this->load->helper('url');
	}	
	public function index()
	{		
		$this->load->view('home');
	}
	public function about()
	{		
		$this->load->view('pages/about');
	}
	public function workexperience()
	{		
		$this->load->view('pages/work-experience');
	}
	public function personalqualities()
	{		
		$this->load->view('pages/personal-qualities');
	}
	public function contact()
	{	
		if($this->input->post('invitesubmit')){
		$name    = $this->input->post('name');
		$email   = $this->input->post('email');
		$phone   = $this->input->post('phone');
		$subje1  = $this->input->post('subject');
		$msg     = $this->input->post('msg');
		$to = "manisha@hitechsoftservices.com";
		$subject = "Contact Details";
		$message = '<html><body>';
		$message .= "<table cellpadding='10'><tr style='background: #eee;'><td width='600px;'><strong>Contact Details:</strong> </td></tr></table>";
		$message .= '<table cellpadding="10">';
		$message .= "<tr style='background: #eee;text-align:left;'><td width='102px;'><strong>Your Full Name:</strong> </td><td width='475px;'>" . $name . "</td></tr>";		
		$message .= "<tr style='background: #eee;text-align:left;'><td width='102px;'><strong>Email:</strong> </td><td width='475px;'>" . $email . "</td></tr>";
		$message .= "<tr style='background: #eee;text-align:left;'><td width='102px;'><strong>Phone:</strong> </td><td width='475px;'>" . $phone . "</td></tr>";
		$message .= "<tr style='background: #eee;text-align:left;'><td width='102px;'><strong>Subject:</strong> </td><td width='475px;'>" . $subje1 . "</td></tr>";		
		$message .= "<tr style='background: #eee;text-align:left;'><td width='102px;'><strong>Message:</strong> </td><td width='475px;'>" . $msg . "</td></tr>";
		$message .= "<tr><td></td></tr>";
		$message .= "</table>";
		$message .= "</body></html>";
		$headers = "From: info@college.com\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		$sendmail = mail($to,$subject,$message,$headers);
		if($sendmail)
		{
		$this->session->set_flashdata('success','Thanks for Applying.We will get back to you soon');
		}
		else
		{
		$this->session->set_flashdata('error','Your Mail delivery failed');
		}
		}
		$this->load->view('pages/contact');
	}
}
?>
