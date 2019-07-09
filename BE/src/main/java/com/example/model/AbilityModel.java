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
@Entity(name = "kemampuan")
//Bayu
public class AbilityModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_KEMAMPUAN")
	private long idAbility;
	@Column(name = "ID_KATEGORI")
	private long idCategory;
	@Column(name = "NAMA_KEMAMPUAN")
	private String abilityName;

	public String getAbilityName() {
		 return abilityName;
	}
	public void setAbilityName(String abilityName) {
		this.abilityName = abilityName;
	}
	public long getIdAbility() {
		 return idAbility;
	}
	public void setIdAbility(long idAbility) {
		this.idAbility = idAbility;
	}
	public long getIdCategory() {
		 return idCategory;
	}
	public void setIdCategory(long idCategory) {
		this.idCategory = idCategory;
	}
}
