package com.deskspace.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.deskspace.model.User;

public interface UserDAO extends JpaRepository<User, Integer> {

	Optional<User> findByEmail(String userEmail);
}
