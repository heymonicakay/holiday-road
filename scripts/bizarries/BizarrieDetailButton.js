/* Responsiblity - This module is responsible for managing the bizarrie details button.

imports - useBiz

listens for - 'bizSelected' event
      type - custom
      detail - 'bizId

listens for - 'browser generated' event 
      type - 'click' 
      target - classList.contains(".btn--biz-deets")

dispatches - 'custom event'
      name - 'bizDetailsClicked'
      payload - none

exports - bizDetailHTML()


**/