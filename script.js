const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let ans = document.querySelectorAll('.price')
	document.write(ans);
};

getSumBtn.addEventListener("click", getSum);

