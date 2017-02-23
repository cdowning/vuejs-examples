Vue.component('tasks', {
    props: ['list'],

    template: '#tasks-template',
    computed: {
        remaining: function() {
            var vm = this;
            
            return this.list.filter(this.inProgress).length;
        }
    },
    
    methods: {
        isCompleted: function(task) {
            return task.completed;
        },
        inProgress: function(task) {
            return ! this.isCompleted(task);
        },
        deleteTask: function(task) {
            this.list.$remove(task);
        },
        clearCompleted: function() {
            // only show the items that are in progress
            this.list = this.list.filter(this.inProgress);
        },
        addTask: function(task) {
            // const newItem = {
            //     body: task,
            //     completed: false
            // }
            // this.list.push(newItem);
            this.list.push({
                body: task,
                completed: false
            });
            this.task = ''; 
        }
    }
    
});



new Vue({
    el: '#app',
    
    newTodo: '',
    
    data: {
        tasks: [
            { body: 'Go to the bank', completed: false },
            { body: 'Go to the store', completed: false },
            { body: 'Go to the doctor', completed: false }
        ]
    }
    
});

