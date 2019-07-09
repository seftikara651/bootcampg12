package com.example.dto.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name="Users")
public class UsersModel{
	@Id
	@Column(name="ID_USER")
	private long userId;
	@Column(name="USERNAME")
	private String userName;
	@Column(name="PASSWORD")
	private String password;
	@Column(name="IS_ACTIVE")
	private int isActive;

	public void update(UsersModel newUsersModel){
		this.userName=newUsersModel.userName;
		this.password=newUsersModel.password;
		this.isActive=newUsersModel.isActive;
	}
}