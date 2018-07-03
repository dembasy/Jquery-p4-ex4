$(function(){
$("#mobile_number").validate({
  rules: {
    number: {required: true,number:true}
  },
  messages: {
  number: {required: "Please Enter Your Mobile Number",number:"Please enter numbers Only"}
  }
 });
});
