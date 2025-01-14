package com.todo.service;

import com.todo.entity.TodoItem;

import java.util.List;

public interface TodoService {

    List<TodoItem> getTodosByUser(String username);

    TodoItem createTodoForUser(TodoItem todo, String username);

    TodoItem updateTodo(Long id, TodoItem updatedTodo, String username);

    void deleteTodo(Long id, String username);
}
