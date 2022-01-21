const milestonesData=JSON.parse(data).data;

const loadMileStones=()=>{
    const mileStones=document.querySelector(".milestones");

    mileStones.innerHTML=`${milestonesData.map((milestones)=>{
        return `<div class="milestone border-b" id=${milestones._id}>
        <div class="flex">
          <div class="checkbox"><input type="checkbox" onclick="markMilestone(this, ${milestones._id})" /></div>
          <div onclick="openMilestone(this, ${milestones._id})">
            <p>
              ${milestones.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
        ${milestones.modules.map((module)=>{
            return `
            <div class="module border-b">
            <p>${module.name}</p>
          </div>`
        }).join("")}
          
        </div>
      </div>`
    }).join("")}`
}

const openMilestone=(milestoneElement,id)=>{
    const currentPannel= milestoneElement.parentNode.nextElementSibling;

    const shownPannel= document.querySelector(".show");

    const active= document.querySelector(".active")

    if(!currentPannel.classList.contains("show") && shownPannel){
        shownPannel.classList.remove("show")
       

    }
    currentPannel.classList.toggle("show")

    if(!milestoneElement.classList.contains("active") && active){
        active.classList.remove("active")
    }

    milestoneElement.classList.toggle("active")

    showMilestone(id)


}

const showMilestone=(id)=>{
  const milestoneImage= document.querySelector(".milestoneImage");
  const name= document.querySelector(".title");
  const details= document.querySelector(".details")

  milestoneImage.style.opacity="0";

  milestoneImage.src= milestonesData[id].image;

  name.innerText=milestonesData[id].name;
  details.innerText=milestonesData[id].description;
}
const milestoneImage= document.querySelector(".milestoneImage");

milestoneImage.onload=function(){
  this.style.opacity="1";
}

const markMilestone=(checkbox,id)=>{
  const doneList= document.querySelector(".doneList")
  const milestoneList= document.querySelector(".milestones")

  const item= document.getElementById(id);

  if(checkbox.checked){
    milestoneList.removeChild(item);
    doneList.appendChild(item);

  }else{
    milestoneList.appendChild(item).sort();
    doneList.removeChild(item);

  }

}
loadMileStones();


