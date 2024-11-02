function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
document.querySelector("button").addEventListener("click", function(event) {
    event.preventDefault();
    let valid = true;    
    const inputs = document.querySelectorAll(".information input, .information select");
    inputs.forEach(input => {
        const errorMessage = input.parentElement.querySelector(".error_message");
        if (!input.value) {
            errorMessage.textContent = `Vui lòng điền vào ô trống`;
            errorMessage.style.color = "red";
            valid = false;
        }
        else{
            errorMessage.textContent = ""; 
        }
    });    
    if (valid){
        alert("Thông tin đã được nhập đầy đủ. Đang đặt bàn...");    
    }
});