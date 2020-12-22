function toggleOpenMenu(menu) {
    const menuCatalog = document.getElementById("menu-catalog");
    const mainBlock = document.getElementsByTagName("main")[0];
    menu.classList.toggle("menu-opened");
    menuCatalog.classList.toggle("hidden");
    mainBlock.classList.toggle("shift");
}
function toggleOpenCollapsedMenu() {
    const menu = document.getElementById("nav-menu-list");
    menu.classList.toggle("opened");
}