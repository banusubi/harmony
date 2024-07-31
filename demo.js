document.getElementById('feedback-form').addEventListener('submit' ,function (event) {
    console.log(event);
    const fullname= document.getElementById('full-name').value;
    let email = "";
    email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    console.log(fullname, email, description, "form values");
    // alert("you've successfully submitted the form. Name", fullname, "Email", email, "Description", description);
    alert("you've successfully submitted the form. Name " + fullname + "." + "Email" + email + ".");
});




    // Event.preventDefault('send');//prevent form from submitting the traditional way
    // //get form values
    // const fullname=document.getElementById('fullname').value;
    // const email=document.getElementById('email').value;
    // const opinion=document.getElementById('opinion').value;

    // //basic validation

    // if(!fullname || !email || !opinion)
    //     alert('please fill out all fields.');

    // //display confirmaton message (you can also send the data to a server here)
    // alert('Thank you for your feedback,');


    // //Optionally, clear the form fields
    // document.getElementById('feedback form').reset();

    // //sellect the search  
    // document.querySelector('search').addEventListener('click'(Event))





    // <script>
    //         document.getElementById('feedbackform').addEventListener('submit',function(event) {
    //             event.preventDefault();
    //             const name=document.getElementById('name').value;
    //             const email=document.getElementById('email').value;
    //             const message=document.getElementById('message').value;
    //             alert('Thank you for your feedback,${name}!')
    //         });