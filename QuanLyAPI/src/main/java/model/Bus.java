package model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@Entity
@Table(name = "xekhach", schema = "quanly")
public class Bus implements Serializable{

    /**
	 * 
	 */
	private static final long serialVersionUID = -1874819633707919881L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idxekhach;
    
	@NotNull
    private String bienso;
	
	@NotNull
    private String mauxe;
	
	@NotNull
    private String hangsx;
	
	@NotNull
    private String doixe;
	
	@NotNull
    private String model;
	
	@NotNull
    private int soghe;
	
	@NotNull
    private int sonamsudung;
	
	@NotNull
    private Date ngaybaoduong;


}