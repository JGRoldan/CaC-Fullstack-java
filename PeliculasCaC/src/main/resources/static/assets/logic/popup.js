const swalAlert = (message) =>{
    Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
}

export { swalAlert }