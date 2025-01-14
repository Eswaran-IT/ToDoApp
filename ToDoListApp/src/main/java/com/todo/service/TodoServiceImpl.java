package com.todo.service;

import com.todo.entity.TodoItem;
import com.todo.entity.User;
import com.todo.repository.TodoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    private final TodoRepository todoRepository;
    private final UserService userService;

    @Autowired
    public TodoServiceImpl(TodoRepository todoRepository, UserService userService) {
        this.todoRepository = todoRepository;
        this.userService = userService;
    }

    @Override
    public List<TodoItem> getTodosByUser(String username) {
        User user = userService.findUserByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return todoRepository.findByUser(user);
    }

    @Override
    public TodoItem createTodoForUser(TodoItem todo, String username) {
        User user = userService.findUserByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        todo.setUser(user);
        return todoRepository.save(todo);
    }

    @Override
    public TodoItem updateTodo(Long id, TodoItem updatedTodo, String username) {
        TodoItem existingTodo = todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found"));
        
        User user = userService.findUserByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        if (!existingTodo.getUser().equals(user)) {
            throw new RuntimeException("Access Denied");
        }
        
        existingTodo.setTitle(updatedTodo.getTitle());
        existingTodo.setDescription(updatedTodo.getDescription());
        existingTodo.setCompleted(updatedTodo.isCompleted());
        
        return todoRepository.save(existingTodo);
    }

    @Override
    public void deleteTodo(Long id, String username) {
        TodoItem todo = todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found"));
        
        User user = userService.findUserByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!todo.getUser().equals(user)) {
            throw new RuntimeException("Access Denied");
        }
        
        todoRepository.delete(todo);
    }
}
