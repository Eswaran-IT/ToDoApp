package com.todo.service;

import com.todo.entity.User;
import java.util.Optional;


public interface UserService {

    User registerUser(User user);

    Optional<User> findUserByUsername(String username);

    User loginUser(User user);
}
