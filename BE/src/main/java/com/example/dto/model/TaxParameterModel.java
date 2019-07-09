package com.example.dto.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

public class TaxParameterModel {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	  @Column(name="TB_PARAMETER_PAJK")
	  private String tbTaxParameter;

	
	@Column(name="BATASAN_PPH1")
	  private double limitPPH1;
	  
	  @Column(name="BATASAN_PPH2")
	  private double limitPPH2;
	  
	  
	  @Column(name="BATASAN_PPH3")
	  private double limitPPH3;
	  
	  
	  @Column(name="BATASAN_PPH4")
	  private double limitPPH4;
	  
	  
	  @Column(name="PRESENTASE_PPH_K1")
	  private double percentagePPHk1;
	  
	  
	  @Column(name="PRESENTASE_PPH_K2")
	  private double percentagePPHk2;
	  
	 
	  @Column(name="PRESENTASE_PPH_K3")
	  private double percentagePPHk3;
	  
	  
	  @Column(name="PRESENTASE_PPH_K4")
	  private int percentagePPHk4;

	
	  @Column(name="PTKP_UTAMA")
	  private int mainPTKP;
	  
	  
	  @Column(name="PTKP_TAMBAHAN")
	  private int additionalPTKP;
	 
	  
	  @Column(name="MAX_PTKP_ANAK")
	  private double maxChildPTKP;
	  
	  
	  @Column(name="POSITION_ALLOWANCE")
	  private double positionAllowance;
	  
	  
	  @Column(name="MAX_BIAYA-JABATAN")
	  private double maxDepartmentCost;
	  
	  
	  @Column(name="IURAN_PENSIUN")
	  private double pensionContributions;
	  
	//asdasd
}
