export const TaskSplitChecker = (tasks: ITask[]):TasksSplit => {
    let regular: ITask[] = [];
    let left: ITask[] = [];
    let right: ITask[] = [];
    let isLeftSection = false;
    let isRightSection = false;
    let leftScreen = 6;
    let rightScreen = 6;

    tasks?.forEach((item: ITask) => {
      if (item.specialModuleType === 'splitedScreenLeft') {
        leftScreen = parseInt(item.properties?.split(":")[1]);
        isLeftSection = true;
      }
  
      if (item.specialModuleType === 'doneSplitedScreenLeft') {
        isLeftSection = false;
      }
  
      if (item.specialModuleType === 'splitedScreenRight') {
        rightScreen = parseInt(item.properties?.split(":")[1]);
        isRightSection = true;
      }
  
      if (item.specialModuleType === 'doneSplitedScreenRight') {
        isRightSection = false;
      }
  
      if (isLeftSection) {
        left.push(item);
      } else if (isRightSection) {
        right.push(item);
      } else {
        if(item.specialModuleType === 'doneSplitedScreenRight'){
            left.push(item);
        } else if(item.specialModuleType === "doneSplitedScreenLeft"){
            right.push(item);
        } else {
            regular.push(item);
        }
    
      }
    });
  
    return { regular, left, leftScreen, right, rightScreen };
}