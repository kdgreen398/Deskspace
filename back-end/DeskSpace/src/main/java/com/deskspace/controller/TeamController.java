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
import org.springframework.web.bind.annotation.RestController;

import com.deskspace.DAO.TeamDAO;
import com.deskspace.model.Team;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", maxAge = 3600, allowedHeaders = "*")
public class TeamController {
	private TeamDAO teamDAO;
	
	@Autowired
	public TeamController(TeamDAO teamDAO) {
		super();
		this.teamDAO = teamDAO;
	}
	
	@GetMapping("/team")
	public List<Team> getAllTeams() {
		return this.teamDAO.findAll();
	}
	
	@PostMapping("/team")
	public Team createNewTeam(@RequestBody Team teamInfo) {
		return this.teamDAO.save(teamInfo);

	}
	
	@GetMapping("/team/{id}")
	public Team getTeamById(@PathVariable(value="id") int teamId) {
		Team team;
		try {
			team = this.teamDAO.findById(teamId).orElseThrow(() -> new Exception());
			return team;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	@PutMapping("/team/{id}")
	public Team updateTeam(@PathVariable(value="id") int teamId, @RequestBody Team teamInfo) {
		Team team;
		try {
			team = this.teamDAO.findById(teamId).orElseThrow(() -> new Exception());
			
			team.setName(teamInfo.getName());
			return this.teamDAO.save(team);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
