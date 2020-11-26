package com.deskspace.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.deskspace.DAO.UserDAO;
import com.deskspace.model.User;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", maxAge = 3600, allowedHeaders = "*")
public class UserController {

	private UserDAO userDAO;

	@Autowired
	public UserController(UserDAO userDAO) {
		super();
		this.userDAO = userDAO;
	}

	@GetMapping("/user")
	public List<User> getAllUsers() {
		return this.userDAO.findAll();

	}

	@PostMapping("/user")
	public User createNewUser(@RequestBody User userInfo) {
		return this.userDAO.save(userInfo);

	}
	
	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable(value="id") int userId) {
		User user;
		try {
			user = this.userDAO.findById(userId).orElseThrow(() -> new Exception());
			return user;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	@PutMapping("/user/{id}")
	public User updateUser(@PathVariable(value="id") int userId, @RequestBody User userInfo) {
		User user;
		try {
			user = this.userDAO.findById(userId).orElseThrow(() -> new Exception());
			user.setFirstName(userInfo.getFirstName());
			user.setLastName(userInfo.getLastName());
			return this.userDAO.save(user);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	
}
