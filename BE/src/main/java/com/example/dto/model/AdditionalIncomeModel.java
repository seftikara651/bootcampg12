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
@Entity(name="Tambahan_pendapatan")
public class AdditionalIncomeModel{
	@Id
	@Column(name="id_tambahan_pendapatan")
	private long idAdditional;
	@Column(name="nik")
	private String nik;
	@Column(name="tanggal_tambahan_pendapatan")
	private String dateOfAdditionalIncome;
	@Column(name="lama_lembur")
	private long lengthOvertime;
	@Column(name="variable_bonus")
	private long bonusVariable;
}