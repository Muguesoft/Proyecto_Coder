export const popMessage = (a_message, a_icon, a_showconf, a_timer) => {
    Swal.fire({
        position: 'top-end',
        icon: a_icon,
        title: a_message,
        showConfirmButton: a_showconf,
        timer: a_timer
    })
}