let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully Submiteed';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please fix the Error!';
let warningMsg = '<i class="fa-solid fa-circle-exclamation"></i>Check again';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('Error')){
        toast.classList.add('error');
    }
    if(msg.includes('Check')){
        toast.classList.add('warning');
    }

    setTimeout(()=>{
        toast.remove();
    },5000)
}