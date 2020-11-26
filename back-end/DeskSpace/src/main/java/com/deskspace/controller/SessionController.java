package com.deskspace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deskspace.DAO.UserDAO;
import com.deskspace.model.User;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", maxAge = 3600, allowedHeaders = "*")
public class SessionController {
	
	private UserDAO userDAO;

	@Autowired
	public SessionController(UserDAO userDAO) {
		super();
		this.userDAO = userDAO;
	}


	@PostMapping("/login")
	public User loginUser(@RequestBody User userInfo) {
		User user;
		try {
			user = this.userDAO.findByEmail(userInfo.getEmail()).orElseThrow(() -> new Exception());
			if (user.getPassword().equals(userInfo.getPassword())) {
				return user;				
			}
			else {
				return null;				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
