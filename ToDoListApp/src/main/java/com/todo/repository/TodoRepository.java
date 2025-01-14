package com.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todo.entity.TodoItem;
import com.todo.entity.User;

import java.util.List;

public interface TodoRepository extends JpaRepository<TodoItem, Long> {
    List<TodoItem> findByUser(User user);
}
