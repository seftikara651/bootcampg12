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
@Entity(name="List_kemampuan")
public class AbilityListModel{
	@Id
	@Column(name="NILAI_KEMAMPUAN")
	private long scoreAbility;
	@Column(name="ID_LIST_KEMAMPUAN")
	private long idAbilityList;
	@Column(name="NIK")
	private String nik;
	@Column(name="ID_KEMAMPUAN")
	private long idAbility;
}