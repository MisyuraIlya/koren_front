import Swal from 'sweetalert2';

export const onSuccessAlert = (title: string, message: string) => {
  Swal.fire({
    title: title,
    icon:'success',
    text: message,
    timer: 3000,
    showConfirmButton: false
  });
};

export const onErrorAlert = (title: string, message: string) => {
  Swal.fire({
    title: title,
    text: message,
    icon:'error',
    timer: 3000,
    showConfirmButton: false,
  });
};

export const onInfoAlert = (title: string, message: string) => {
  Swal.fire({
    title: title,
    text: message,
    icon: 'info',
    timer: 3000,
    showConfirmButton: false,
  });
};

export const onAsk = (title: string, message: string): Promise<boolean> => {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'כן',
      cancelButtonText: 'לא',
      customClass:{
        confirmButton: 'bg-primary',
        cancelButton:''
      }
    }).then((result) => {
      return result.isConfirmed;
    });
  };

export const apiResponseHandler = (data: any) => {
  if (data.status === 'success') {
    onSuccessAlert(data.message, '');
  } else if (data.status === 'info') {
    onErrorAlert(data.message, '');
  } else {
    onErrorAlert(data.message, '');
  }
};
