package com.todo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.todo.entity.TodoItem;
import com.todo.service.TodoService;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    private final TodoService todoService;

    @Autowired
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/{username}")
    public List<TodoItem> getTodosByUser(@PathVariable String username) {
        return todoService.getTodosByUser(username);
    }

    @PostMapping("/{username}")
    public TodoItem createTodo(@PathVariable String username, @RequestBody TodoItem todo) {
        return todoService.createTodoForUser(todo, username);
    }

    @PutMapping("/{id}/{username}")
    public TodoItem updateTodo(@PathVariable Long id, @PathVariable String username, @RequestBody TodoItem updatedTodo) {
        return todoService.updateTodo(id, updatedTodo, username);
    }

    @DeleteMapping("/{id}/{username}")
    public void deleteTodo(@PathVariable Long id, @PathVariable String username) {
        todoService.deleteTodo(id, username);
    }
}
