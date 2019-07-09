package com.example.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "tingkatan")
public class LevelModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_TINGKATAN")
	 private long idLevel;
	 @Column(name = "NAMA_TINGKATAN")
	 private String LevelName;
	 
	 
	public String getLevelName() {
		 return LevelName;
	}
	public void setLevelName(String levelName) {
		this.LevelName = levelName;
	}
	public long getIdLevel() {
		return idLevel;
	}
	public void setIdLevel(long idLevel) {
		this.idLevel = idLevel;
	}

}
