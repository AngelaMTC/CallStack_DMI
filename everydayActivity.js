const toDo = (activity) => {
    console.log('toDo ' + activity);
  }

  function mixActivities(n) {
    if (n <= 0) return;
  
    console.log('Mix #' + n);
    mixActivities(n - 1);
  }
  
  function doing() {
    console.log('Doing');
  }
  
  function everydayActivities() {
    toDo('wash my teeth');
    toDo('shower');
    toDo('breakfast');
    mixActivities(4);
    doing();
  }
  
  everydayActivities();