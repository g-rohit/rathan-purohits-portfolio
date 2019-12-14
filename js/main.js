window.onload = () => {
  console.log("window has loaded");

  let imageContainer = {
    image1: "https://i.postimg.cc/65dKmrFB/DSC00154-01.jpg",
    image2: "https://i.postimg.cc/GpSnyqTx/DSC00831-01.jpg",
    image3: "https://i.postimg.cc/ryRMSXJ0/DSC01037-01.jpg",
    image4: "https://i.postimg.cc/d1bMW3B7/DSC01300.jpg",
    image5: "https://i.postimg.cc/8P8D4KKy/DSC01455.jpg",
    image6: "https://i.postimg.cc/13sShgZw/DSC01755.jpg",
    image7: "https://i.postimg.cc/Ss34wDyx/DSC01769.jpg",
    image8: "https://i.postimg.cc/mgjsbbbq/DSC01795.jpg",
    image9: "https://i.postimg.cc/qMdVytqS/DSC01914-01.jpg",
    image10: "https://i.postimg.cc/JhFSn0ST/DSC01974-01.jpg",
    image11: "https://i.postimg.cc/jSZGpZcY/DSC02017-01.jpg",
    image12: "https://i.postimg.cc/DZbHbFT7/DSC02069-01.jpg",
    image13: "https://i.postimg.cc/TP1ZfgNL/DSC02127-01.jpg",
    image14: "https://i.postimg.cc/Bnqr7dxC/DSC02137-01.jpg",
    image15: "https://i.postimg.cc/28xJW2PL/DSC02142-01.jpg",
    image16: "https://i.postimg.cc/ryx7V8jJ/DSC02164-02.jpg",
    image17: "https://i.postimg.cc/R0JXgRbR/DSC02210-01.jpg",
    image18: "https://i.postimg.cc/X7xHqXCw/DSC02272-01.jpg",
    image19: "https://i.postimg.cc/jSFM69v2/DSC02345-01.jpg",
    image20: "https://i.postimg.cc/Znxfr5Dz/DSC02363-01.jpg",
    image21: "https://i.postimg.cc/X7n1n9pj/DSC02376-01.jpg",
    image22: "https://i.postimg.cc/4xd89Z6j/DSC02587.jpg",
    image23: "https://i.postimg.cc/zv87X1Dt/DSC02599.jpg",
    image24: "https://i.postimg.cc/HxQ3gLm8/DSC02603-01.jpg",
    image25: "https://i.postimg.cc/v8tX2DXp/DSC02609.jpg",
    image26: "https://i.postimg.cc/sDnmy8km/DSC02614-01.jpg",
    image27: "https://i.postimg.cc/X7NLR3zX/DSC02623-01.jpg",
    image28: "https://i.postimg.cc/fLhjBhdz/DSC02625-01.jpg",
    image29: "https://i.postimg.cc/sxjPC9Kb/DSC02638-01.jpg",
    image30: "https://i.postimg.cc/C5cGhBQ5/DSC02643.jpg",
    image31: "https://i.postimg.cc/pXdQ0CmF/DSC02667.jpg",
    image32: "https://i.postimg.cc/Qd9QDMkN/DSC02694.jpg",
    image33: "https://i.postimg.cc/zB5KTFm3/DSC02698-01.jpg",
    image34: "https://i.postimg.cc/jSpzSrZH/DSC02711-01.jpg",
    image35: "https://i.postimg.cc/3w22ybcP/DSC02713-01.jpg",
    image36: "https://i.postimg.cc/QCY7GLFW/DSC02714-01.jpg",
    image37: "https://i.postimg.cc/XqY5zNYb/DSC02751.jpg"
  };

  for (var eachImageName in imageContainer) {
    if (imageContainer.hasOwnProperty(eachImageName)) {
      var eachImageURL = imageContainer[eachImageName];
      // console.log("url for " + eachImageName + " is:" + eachImageURL);
    }

    const rowDiv = document.querySelector(".row");

    const eachImgDiv = document.createElement("div");
    eachImgDiv.className = "each-image-div";
    // eachImgDiv.setAttribute("style", 'display:flex');

    const imgTag = document.createElement("img");
    imgTag.setAttribute("src", eachImageURL);
    imgTag.setAttribute("alt", eachImageName);
    
    imgTag.className = "each-image";

    eachImgDiv.appendChild(imgTag);
    rowDiv.appendChild(eachImgDiv);
  }
};



// var allDivs = document.querySelectorAll('.each-image-div');

// console.log(allDivs);

// // Array.prototype.slice.call(allDivs);
// // Array.prototype.slice.call(allDivs).slice(0,10).style.display = 'flex';

// document.querySelector('#loadMore').addEventListener('click', (e) => {
//   e.preventDefault(); 

// console.log('load more');
// });