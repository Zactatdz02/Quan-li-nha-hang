document.querySelector('form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const contact = document.getElementById('contact').value;
    
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
        alert('Tên đăng nhập chỉ được chứa chữ cái và số, không dấu, không kí tự đặc biệt và không có khoảng trắng!');
        event.preventDefault();
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,11}$/;
    if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
        alert('Vui lòng nhập lại email hoặc số điện thoại!');
        event.preventDefault();
        return;
    }

    if (password.length < 8) {
        alert('Mật khẩu phải có ít nhất 8 ký tự.');
        event.preventDefault();
        return;
    }
    
    alert('Đăng ký thành công!');
});
