// Start getting data
window.Initialize = async (elements) => {

    function handleSuccess(stream) {
        window.stream = stream;
        document.getElementById(elements['video']).srcObject = stream;
    }

    try {
        let stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { width: 640, height: 480} });
        handleSuccess(stream);
    } catch (e) {
        console.log(e);
    }
}

//DrawImage
window.Snap = async (src, dest) => {
    let video = document.getElementById(src);
    let ctx = get2DContext(dest);
    ctx.drawImage(video, 0, 0, 640, 480);
}

// Get image bytes
window.GetImageData = async (el) => {
    let ctx = get2DContext(el);
    return ctx.getImageData(0, 0, 640, 480).data;
}

// Helper functions
function get2DContext(el) {
    return document.getElementById(el).getContext('2d');
}