// Menu
// tạo một hằng số , biến menu 
// truy xuất đến .navbar__links element
const menu = document.querySelector('.navbar__links')
const menuButton = document.querySelector('.navbar__icons')

// lắng nghe sự kiện của menuButton  ↓ Arrow Function 
menuButton.addEventListener('click',()=>{
    // Khi click và menuButton thì lớp navbar__open sẽ được thêm vào
    // classList.toggle():
	// Thay đổi sự hiện diện của một lớp CSS (class) trên phần tử. 
    // Nếu lớp đã có, nó sẽ bị xóa , nếu chưa có, nó sẽ được thêm vào.
    menu.classList.toggle('navbar__open');
    menuButton.classList.toggle('open');
})