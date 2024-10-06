const showSuccessPopup = function(options, callback) {
    let mergedOptions = {...{
        title: 'Success',
        text: 'Text here',
        icon: 'success',
        customClass: 'swal-custom',
        reverseButtons: true,
        showCancelButton: false,
        confirmButtonColor: '#E85D24',
        confirmButtonText: 'Close'
    }, ...options};
    
    Swal.fire(mergedOptions).then((result) => {
        callback(result);
    });
};

const showConfirmationPopup = function(options, callback) {
    let mergedOptions = {...{
        title: 'Are you sure?',
        text: 'Text here',
        icon: 'warning',
        customClass: 'swal-custom',
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonColor: '#E85D24',
        // cancelButtonColor: '#d33',
        confirmButtonText: 'Sure',
        cancelButtonText: 'Cancel'
    }, ...options};

    Swal.fire(mergedOptions).then((result) => {
        callback(result);
    });
};