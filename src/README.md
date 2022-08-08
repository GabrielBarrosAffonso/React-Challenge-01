# ROCKETSEAT CHALLENGE 01`

### EXAMPLE
[screen-capture.webm](https://user-images.githubusercontent.com/58013759/183319457-6133754d-f895-4aa6-9c1e-9d568930ef38.webm)

### handleCreateNewTask function added
```
  function handleCreateNewTask() {
    if(newTaskTitle === ''){
      return
    }
    setIds(ids + 1)
    const newTasks = [ ...tasks , {
      id: ids,
      title: newTaskTitle,
      isComplete: false
    }]

    setTasks(newTasks)
  }
```

### handleToggleTaskCompletion function added
```
  function handleToggleTaskCompletion(id: number) {
    const updatedArray = tasks.map(obj => {
      if(obj.id === id) {
        obj.isComplete = !obj.isComplete
        return obj
      }
      return obj
    })
    setTasks(updatedArray)
  }
```

### handleRemoveTask function added
```
  function handleRemoveTask(id: number) {
    const allTasks = [...tasks]
    const removedTask = allTasks.find(task => task.id === id)
    if(removedTask !== undefined){
      const indexTask = allTasks.indexOf(removedTask)
      allTasks.splice(indexTask, 1)
    }
    setTasks(allTasks)
  }
```
