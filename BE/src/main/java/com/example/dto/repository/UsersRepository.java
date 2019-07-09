package com.example.dto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.dto.model.UsersModel;

@Repository
public interface UsersRepository extends JpaRepository<UsersModel, Long>{};