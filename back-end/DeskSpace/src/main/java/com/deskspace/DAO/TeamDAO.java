package com.deskspace.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.deskspace.model.Team;

public interface TeamDAO extends JpaRepository<Team, Integer>{
}
