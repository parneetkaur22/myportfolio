<?php
class Main_model extends CI_Model 
{
	function saverecords($data)
	{
		$this->db->insert('school',$data);
		return true;
	}
}
?>