// JavaScript Document
function viewOrder(status)
{
	if (status != '') {
		window.location.href = "index.php?status="+status;
	} else {
		window.location.href = "index.php";
	}
}


function modifyOrderStatus(orderId)
{
	statusList = window.document.frmOrder.cboOrderStatus;
	status     = statusList.options[statusList.selectedIndex].value;
	window.location.href = 'processOrder.php?action=modify&oid=' + orderId + '&status=' + status;
}

function deleteOrder(orderId)
{

}