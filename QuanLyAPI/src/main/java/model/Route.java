package model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@Entity
@Table(name = "tuyenxe", schema = "quanly")
public class Route implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -6416151075715775712L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idtuyenxe;
    
	@NotNull
    private String lotrinh;
	
	@NotNull
    private int dodai;
	
	@NotNull
    private float dophuctap;
	
	@JsonBackReference
//	@JsonManagedReference
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="idchuyenxe", nullable=false)
    private Buses chuyenxe;
	
}