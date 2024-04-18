package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Table1;
import com.mycompany.myapp.repository.Table1Repository;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.mycompany.myapp.domain.Table1}.
 */
@RestController
@RequestMapping("/api/table-1-s")
@Transactional
public class Table1Resource {

    private final Logger log = LoggerFactory.getLogger(Table1Resource.class);

    private static final String ENTITY_NAME = "accessSampleApplicationTable1";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final Table1Repository table1Repository;

    public Table1Resource(Table1Repository table1Repository) {
        this.table1Repository = table1Repository;
    }

    /**
     * {@code POST  /table-1-s} : Create a new table1.
     *
     * @param table1 the table1 to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new table1, or with status {@code 400 (Bad Request)} if the table1 has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Table1> createTable1(@RequestBody Table1 table1) throws URISyntaxException {
        log.debug("REST request to save Table1 : {}", table1);
        if (table1.getId() != null) {
            throw new BadRequestAlertException("A new table1 cannot already have an ID", ENTITY_NAME, "idexists");
        }
        table1 = table1Repository.save(table1);
        return ResponseEntity.created(new URI("/api/table-1-s/" + table1.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, table1.getId().toString()))
            .body(table1);
    }

    /**
     * {@code PUT  /table-1-s/:id} : Updates an existing table1.
     *
     * @param id the id of the table1 to save.
     * @param table1 the table1 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table1,
     * or with status {@code 400 (Bad Request)} if the table1 is not valid,
     * or with status {@code 500 (Internal Server Error)} if the table1 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Table1> updateTable1(@PathVariable(value = "id", required = false) final Long id, @RequestBody Table1 table1)
        throws URISyntaxException {
        log.debug("REST request to update Table1 : {}, {}", id, table1);
        if (table1.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table1.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table1Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        table1 = table1Repository.save(table1);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table1.getId().toString()))
            .body(table1);
    }

    /**
     * {@code PATCH  /table-1-s/:id} : Partial updates given fields of an existing table1, field will ignore if it is null
     *
     * @param id the id of the table1 to save.
     * @param table1 the table1 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table1,
     * or with status {@code 400 (Bad Request)} if the table1 is not valid,
     * or with status {@code 404 (Not Found)} if the table1 is not found,
     * or with status {@code 500 (Internal Server Error)} if the table1 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Table1> partialUpdateTable1(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Table1 table1
    ) throws URISyntaxException {
        log.debug("REST request to partial update Table1 partially : {}, {}", id, table1);
        if (table1.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table1.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table1Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Table1> result = table1Repository
            .findById(table1.getId())
            .map(existingTable1 -> {
                if (table1.getNumLigne1() != null) {
                    existingTable1.setNumLigne1(table1.getNumLigne1());
                }
                if (table1.getResort2() != null) {
                    existingTable1.setResort2(table1.getResort2());
                }
                if (table1.getResvNameId3() != null) {
                    existingTable1.setResvNameId3(table1.getResvNameId3());
                }
                if (table1.getClientOId4() != null) {
                    existingTable1.setClientOId4(table1.getClientOId4());
                }
                if (table1.getTypeChb5() != null) {
                    existingTable1.setTypeChb5(table1.getTypeChb5());
                }
                if (table1.getConfirmationNo6() != null) {
                    existingTable1.setConfirmationNo6(table1.getConfirmationNo6());
                }
                if (table1.getClientMdmId7() != null) {
                    existingTable1.setClientMdmId7(table1.getClientMdmId7());
                }
                if (table1.getNameId8() != null) {
                    existingTable1.setNameId8(table1.getNameId8());
                }
                if (table1.getParentResvNameId9() != null) {
                    existingTable1.setParentResvNameId9(table1.getParentResvNameId9());
                }
                if (table1.getContactId10() != null) {
                    existingTable1.setContactId10(table1.getContactId10());
                }
                if (table1.getAgenceId11() != null) {
                    existingTable1.setAgenceId11(table1.getAgenceId11());
                }
                if (table1.getAgenceNom12() != null) {
                    existingTable1.setAgenceNom12(table1.getAgenceNom12());
                }
                if (table1.getSocieteId13() != null) {
                    existingTable1.setSocieteId13(table1.getSocieteId13());
                }
                if (table1.getGroupeId14() != null) {
                    existingTable1.setGroupeId14(table1.getGroupeId14());
                }
                if (table1.getNumBloc15() != null) {
                    existingTable1.setNumBloc15(table1.getNumBloc15());
                }
                if (table1.getTypeResv16() != null) {
                    existingTable1.setTypeResv16(table1.getTypeResv16());
                }
                if (table1.getStatutResv17() != null) {
                    existingTable1.setStatutResv17(table1.getStatutResv17());
                }
                if (table1.getDateDebutResv18() != null) {
                    existingTable1.setDateDebutResv18(table1.getDateDebutResv18());
                }
                if (table1.getDateFinResv19() != null) {
                    existingTable1.setDateFinResv19(table1.getDateFinResv19());
                }
                if (table1.getTruncDateDebutResv20() != null) {
                    existingTable1.setTruncDateDebutResv20(table1.getTruncDateDebutResv20());
                }
                if (table1.getTruncDateFinResv21() != null) {
                    existingTable1.setTruncDateFinResv21(table1.getTruncDateFinResv21());
                }
                if (table1.getDateAnnResv22() != null) {
                    existingTable1.setDateAnnResv22(table1.getDateAnnResv22());
                }
                if (table1.getPseudoRoomYn23() != null) {
                    existingTable1.setPseudoRoomYn23(table1.getPseudoRoomYn23());
                }
                if (table1.getCreateurResv24() != null) {
                    existingTable1.setCreateurResv24(table1.getCreateurResv24());
                }
                if (table1.getNomCreateurResv25() != null) {
                    existingTable1.setNomCreateurResv25(table1.getNomCreateurResv25());
                }
                if (table1.getCodeGarantie26() != null) {
                    existingTable1.setCodeGarantie26(table1.getCodeGarantie26());
                }
                if (table1.getFlgDed27() != null) {
                    existingTable1.setFlgDed27(table1.getFlgDed27());
                }
                if (table1.getCodePays28() != null) {
                    existingTable1.setCodePays28(table1.getCodePays28());
                }
                if (table1.getLibPays29() != null) {
                    existingTable1.setLibPays29(table1.getLibPays29());
                }
                if (table1.getCodeNationalite30() != null) {
                    existingTable1.setCodeNationalite30(table1.getCodeNationalite30());
                }
                if (table1.getLibNationalite31() != null) {
                    existingTable1.setLibNationalite31(table1.getLibNationalite31());
                }
                if (table1.getCodeSource32() != null) {
                    existingTable1.setCodeSource32(table1.getCodeSource32());
                }
                if (table1.getLibSource33() != null) {
                    existingTable1.setLibSource33(table1.getLibSource33());
                }
                if (table1.getCodeGrandSource34() != null) {
                    existingTable1.setCodeGrandSource34(table1.getCodeGrandSource34());
                }
                if (table1.getCodeOrigine35() != null) {
                    existingTable1.setCodeOrigine35(table1.getCodeOrigine35());
                }
                if (table1.getLibOrigine36() != null) {
                    existingTable1.setLibOrigine36(table1.getLibOrigine36());
                }
                if (table1.getCodeMarche37() != null) {
                    existingTable1.setCodeMarche37(table1.getCodeMarche37());
                }
                if (table1.getLibMarche38() != null) {
                    existingTable1.setLibMarche38(table1.getLibMarche38());
                }
                if (table1.getCodeGrandMarche39() != null) {
                    existingTable1.setCodeGrandMarche39(table1.getCodeGrandMarche39());
                }
                if (table1.getLibGrandMarche40() != null) {
                    existingTable1.setLibGrandMarche40(table1.getLibGrandMarche40());
                }
                if (table1.getCodePrix41() != null) {
                    existingTable1.setCodePrix41(table1.getCodePrix41());
                }
                if (table1.getCategPrix42() != null) {
                    existingTable1.setCategPrix42(table1.getCategPrix42());
                }
                if (table1.getLibPrix43() != null) {
                    existingTable1.setLibPrix43(table1.getLibPrix43());
                }
                if (table1.getNumChb44() != null) {
                    existingTable1.setNumChb44(table1.getNumChb44());
                }
                if (table1.getDescriptionTypeChb45() != null) {
                    existingTable1.setDescriptionTypeChb45(table1.getDescriptionTypeChb45());
                }
                if (table1.getCodeTypeChb46() != null) {
                    existingTable1.setCodeTypeChb46(table1.getCodeTypeChb46());
                }
                if (table1.getClassChb47() != null) {
                    existingTable1.setClassChb47(table1.getClassChb47());
                }
                if (table1.getCaractChb48() != null) {
                    existingTable1.setCaractChb48(table1.getCaractChb48());
                }
                if (table1.getTypeChbDeReservation49() != null) {
                    existingTable1.setTypeChbDeReservation49(table1.getTypeChbDeReservation49());
                }
                if (table1.getDescriptionTypeChbDeResv50() != null) {
                    existingTable1.setDescriptionTypeChbDeResv50(table1.getDescriptionTypeChbDeResv50());
                }
                if (table1.getCodeTypeChbDeResv51() != null) {
                    existingTable1.setCodeTypeChbDeResv51(table1.getCodeTypeChbDeResv51());
                }
                if (table1.getStatutDeReservation52() != null) {
                    existingTable1.setStatutDeReservation52(table1.getStatutDeReservation52());
                }
                if (table1.getCircuitDistribution53() != null) {
                    existingTable1.setCircuitDistribution53(table1.getCircuitDistribution53());
                }
                if (table1.getCircuitDistribUserRegroup54() != null) {
                    existingTable1.setCircuitDistribUserRegroup54(table1.getCircuitDistribUserRegroup54());
                }
                if (table1.getNumCrs55() != null) {
                    existingTable1.setNumCrs55(table1.getNumCrs55());
                }
                if (table1.getTypeRefCrs56() != null) {
                    existingTable1.setTypeRefCrs56(table1.getTypeRefCrs56());
                }
                if (table1.getCrsInsertDate57() != null) {
                    existingTable1.setCrsInsertDate57(table1.getCrsInsertDate57());
                }
                if (table1.getDateCreaResv58() != null) {
                    existingTable1.setDateCreaResv58(table1.getDateCreaResv58());
                }
                if (table1.getDatePremier59() != null) {
                    existingTable1.setDatePremier59(table1.getDatePremier59());
                }
                if (table1.getStatutPremier60() != null) {
                    existingTable1.setStatutPremier60(table1.getStatutPremier60());
                }
                if (table1.getDateDernier61() != null) {
                    existingTable1.setDateDernier61(table1.getDateDernier61());
                }
                if (table1.getStatutDernier62() != null) {
                    existingTable1.setStatutDernier62(table1.getStatutDernier62());
                }
                if (table1.getDateDernierPseudo63() != null) {
                    existingTable1.setDateDernierPseudo63(table1.getDateDernierPseudo63());
                }
                if (table1.getStatutDernierPseudo64() != null) {
                    existingTable1.setStatutDernierPseudo64(table1.getStatutDernierPseudo64());
                }
                if (table1.getDiffDtCreaAnn65() != null) {
                    existingTable1.setDiffDtCreaAnn65(table1.getDiffDtCreaAnn65());
                }
                if (table1.getDiffDtArrAnn66() != null) {
                    existingTable1.setDiffDtArrAnn66(table1.getDiffDtArrAnn66());
                }
                if (table1.getLeadtime67() != null) {
                    existingTable1.setLeadtime67(table1.getLeadtime67());
                }
                if (table1.getLos68() != null) {
                    existingTable1.setLos68(table1.getLos68());
                }
                if (table1.getOccupantsGroupe69() != null) {
                    existingTable1.setOccupantsGroupe69(table1.getOccupantsGroupe69());
                }
                if (table1.getNbNuitee70() != null) {
                    existingTable1.setNbNuitee70(table1.getNbNuitee70());
                }
                if (table1.getNbNuiteeNnDed71() != null) {
                    existingTable1.setNbNuiteeNnDed71(table1.getNbNuiteeNnDed71());
                }
                if (table1.getNbResvAnn72() != null) {
                    existingTable1.setNbResvAnn72(table1.getNbResvAnn72());
                }
                if (table1.getNbAdu73() != null) {
                    existingTable1.setNbAdu73(table1.getNbAdu73());
                }
                if (table1.getNbEnf74() != null) {
                    existingTable1.setNbEnf74(table1.getNbEnf74());
                }
                if (table1.getNbPersDayU75() != null) {
                    existingTable1.setNbPersDayU75(table1.getNbPersDayU75());
                }
                if (table1.getNbPersArr76() != null) {
                    existingTable1.setNbPersArr76(table1.getNbPersArr76());
                }
                if (table1.getNbPersDep77() != null) {
                    existingTable1.setNbPersDep77(table1.getNbPersDep77());
                }
                if (table1.getNbPersAnn78() != null) {
                    existingTable1.setNbPersAnn78(table1.getNbPersAnn78());
                }
                if (table1.getNbPersNoshow79() != null) {
                    existingTable1.setNbPersNoshow79(table1.getNbPersNoshow79());
                }
                if (table1.getNbChbDayU80() != null) {
                    existingTable1.setNbChbDayU80(table1.getNbChbDayU80());
                }
                if (table1.getNbChbArr81() != null) {
                    existingTable1.setNbChbArr81(table1.getNbChbArr81());
                }
                if (table1.getNbChbDep82() != null) {
                    existingTable1.setNbChbDep82(table1.getNbChbDep82());
                }
                if (table1.getNbChbAnn83() != null) {
                    existingTable1.setNbChbAnn83(table1.getNbChbAnn83());
                }
                if (table1.getNbChbNoshow84() != null) {
                    existingTable1.setNbChbNoshow84(table1.getNbChbNoshow84());
                }
                if (table1.getRevenuNetChambre85() != null) {
                    existingTable1.setRevenuNetChambre85(table1.getRevenuNetChambre85());
                }
                if (table1.getRevenuTaxeChambre86() != null) {
                    existingTable1.setRevenuTaxeChambre86(table1.getRevenuTaxeChambre86());
                }
                if (table1.getRevenuNetChambreGlobal87() != null) {
                    existingTable1.setRevenuNetChambreGlobal87(table1.getRevenuNetChambreGlobal87());
                }
                if (table1.getRevenuTaxeChambreGlobal88() != null) {
                    existingTable1.setRevenuTaxeChambreGlobal88(table1.getRevenuTaxeChambreGlobal88());
                }
                if (table1.getRevenuNetBq89() != null) {
                    existingTable1.setRevenuNetBq89(table1.getRevenuNetBq89());
                }
                if (table1.getRevenuTaxeBq90() != null) {
                    existingTable1.setRevenuTaxeBq90(table1.getRevenuTaxeBq90());
                }
                if (table1.getRevenuNetBqGlobal91() != null) {
                    existingTable1.setRevenuNetBqGlobal91(table1.getRevenuNetBqGlobal91());
                }
                if (table1.getRevenuTaxeBqGlobal92() != null) {
                    existingTable1.setRevenuTaxeBqGlobal92(table1.getRevenuTaxeBqGlobal92());
                }
                if (table1.getRevenuNetExtra93() != null) {
                    existingTable1.setRevenuNetExtra93(table1.getRevenuNetExtra93());
                }
                if (table1.getRevenuTaxeExtra94() != null) {
                    existingTable1.setRevenuTaxeExtra94(table1.getRevenuTaxeExtra94());
                }
                if (table1.getRevenuNetExtraGlobal95() != null) {
                    existingTable1.setRevenuNetExtraGlobal95(table1.getRevenuNetExtraGlobal95());
                }
                if (table1.getRevenuTaxeExtraGlobal96() != null) {
                    existingTable1.setRevenuTaxeExtraGlobal96(table1.getRevenuTaxeExtraGlobal96());
                }
                if (table1.getRevenuNetTotal97() != null) {
                    existingTable1.setRevenuNetTotal97(table1.getRevenuNetTotal97());
                }
                if (table1.getRevenuTaxeTotal98() != null) {
                    existingTable1.setRevenuTaxeTotal98(table1.getRevenuTaxeTotal98());
                }
                if (table1.getRevenuNetTotalGlobal99() != null) {
                    existingTable1.setRevenuNetTotalGlobal99(table1.getRevenuNetTotalGlobal99());
                }
                if (table1.getRevenuTaxeTotalGlobal100() != null) {
                    existingTable1.setRevenuTaxeTotalGlobal100(table1.getRevenuTaxeTotalGlobal100());
                }
                if (table1.getProdRevenuChambre101() != null) {
                    existingTable1.setProdRevenuChambre101(table1.getProdRevenuChambre101());
                }
                if (table1.getProdRevenuBq102() != null) {
                    existingTable1.setProdRevenuBq102(table1.getProdRevenuBq102());
                }
                if (table1.getProdRevenuExtra103() != null) {
                    existingTable1.setProdRevenuExtra103(table1.getProdRevenuExtra103());
                }
                if (table1.getProdRevenuTotal104() != null) {
                    existingTable1.setProdRevenuTotal104(table1.getProdRevenuTotal104());
                }
                if (table1.getProdChambreNbNuitees105() != null) {
                    existingTable1.setProdChambreNbNuitees105(table1.getProdChambreNbNuitees105());
                }
                if (table1.getTechCreateDate106() != null) {
                    existingTable1.setTechCreateDate106(table1.getTechCreateDate106());
                }
                if (table1.getTechUpdateDate107() != null) {
                    existingTable1.setTechUpdateDate107(table1.getTechUpdateDate107());
                }
                if (table1.getNumLigne108() != null) {
                    existingTable1.setNumLigne108(table1.getNumLigne108());
                }
                if (table1.getResort109() != null) {
                    existingTable1.setResort109(table1.getResort109());
                }
                if (table1.getResvNameId110() != null) {
                    existingTable1.setResvNameId110(table1.getResvNameId110());
                }
                if (table1.getClientOId111() != null) {
                    existingTable1.setClientOId111(table1.getClientOId111());
                }
                if (table1.getTypeChb112() != null) {
                    existingTable1.setTypeChb112(table1.getTypeChb112());
                }
                if (table1.getConfirmationNo113() != null) {
                    existingTable1.setConfirmationNo113(table1.getConfirmationNo113());
                }
                if (table1.getClientMdmId114() != null) {
                    existingTable1.setClientMdmId114(table1.getClientMdmId114());
                }
                if (table1.getNameId115() != null) {
                    existingTable1.setNameId115(table1.getNameId115());
                }
                if (table1.getParentResvNameId116() != null) {
                    existingTable1.setParentResvNameId116(table1.getParentResvNameId116());
                }
                if (table1.getContactId117() != null) {
                    existingTable1.setContactId117(table1.getContactId117());
                }
                if (table1.getAgenceId118() != null) {
                    existingTable1.setAgenceId118(table1.getAgenceId118());
                }
                if (table1.getAgenceNom119() != null) {
                    existingTable1.setAgenceNom119(table1.getAgenceNom119());
                }
                if (table1.getSocieteId120() != null) {
                    existingTable1.setSocieteId120(table1.getSocieteId120());
                }
                if (table1.getGroupeId121() != null) {
                    existingTable1.setGroupeId121(table1.getGroupeId121());
                }
                if (table1.getNumBloc122() != null) {
                    existingTable1.setNumBloc122(table1.getNumBloc122());
                }
                if (table1.getTypeResv123() != null) {
                    existingTable1.setTypeResv123(table1.getTypeResv123());
                }
                if (table1.getStatutResv124() != null) {
                    existingTable1.setStatutResv124(table1.getStatutResv124());
                }
                if (table1.getDateDebutResv125() != null) {
                    existingTable1.setDateDebutResv125(table1.getDateDebutResv125());
                }
                if (table1.getDateFinResv126() != null) {
                    existingTable1.setDateFinResv126(table1.getDateFinResv126());
                }
                if (table1.getTruncDateDebutResv127() != null) {
                    existingTable1.setTruncDateDebutResv127(table1.getTruncDateDebutResv127());
                }
                if (table1.getTruncDateFinResv128() != null) {
                    existingTable1.setTruncDateFinResv128(table1.getTruncDateFinResv128());
                }
                if (table1.getDateAnnResv129() != null) {
                    existingTable1.setDateAnnResv129(table1.getDateAnnResv129());
                }
                if (table1.getPseudoRoomYn130() != null) {
                    existingTable1.setPseudoRoomYn130(table1.getPseudoRoomYn130());
                }
                if (table1.getCreateurResv131() != null) {
                    existingTable1.setCreateurResv131(table1.getCreateurResv131());
                }
                if (table1.getNomCreateurResv132() != null) {
                    existingTable1.setNomCreateurResv132(table1.getNomCreateurResv132());
                }
                if (table1.getCodeGarantie133() != null) {
                    existingTable1.setCodeGarantie133(table1.getCodeGarantie133());
                }
                if (table1.getFlgDed134() != null) {
                    existingTable1.setFlgDed134(table1.getFlgDed134());
                }
                if (table1.getCodePays135() != null) {
                    existingTable1.setCodePays135(table1.getCodePays135());
                }
                if (table1.getLibPays136() != null) {
                    existingTable1.setLibPays136(table1.getLibPays136());
                }
                if (table1.getCodeNationalite137() != null) {
                    existingTable1.setCodeNationalite137(table1.getCodeNationalite137());
                }
                if (table1.getLibNationalite138() != null) {
                    existingTable1.setLibNationalite138(table1.getLibNationalite138());
                }
                if (table1.getCodeSource139() != null) {
                    existingTable1.setCodeSource139(table1.getCodeSource139());
                }
                if (table1.getLibSource140() != null) {
                    existingTable1.setLibSource140(table1.getLibSource140());
                }
                if (table1.getCodeGrandSource141() != null) {
                    existingTable1.setCodeGrandSource141(table1.getCodeGrandSource141());
                }
                if (table1.getCodeOrigine142() != null) {
                    existingTable1.setCodeOrigine142(table1.getCodeOrigine142());
                }
                if (table1.getLibOrigine143() != null) {
                    existingTable1.setLibOrigine143(table1.getLibOrigine143());
                }
                if (table1.getCodeMarche144() != null) {
                    existingTable1.setCodeMarche144(table1.getCodeMarche144());
                }
                if (table1.getLibMarche145() != null) {
                    existingTable1.setLibMarche145(table1.getLibMarche145());
                }
                if (table1.getCodeGrandMarche146() != null) {
                    existingTable1.setCodeGrandMarche146(table1.getCodeGrandMarche146());
                }
                if (table1.getLibGrandMarche147() != null) {
                    existingTable1.setLibGrandMarche147(table1.getLibGrandMarche147());
                }
                if (table1.getCodePrix148() != null) {
                    existingTable1.setCodePrix148(table1.getCodePrix148());
                }
                if (table1.getCategPrix149() != null) {
                    existingTable1.setCategPrix149(table1.getCategPrix149());
                }
                if (table1.getLibPrix150() != null) {
                    existingTable1.setLibPrix150(table1.getLibPrix150());
                }
                if (table1.getNumChb151() != null) {
                    existingTable1.setNumChb151(table1.getNumChb151());
                }
                if (table1.getDescriptionTypeChb152() != null) {
                    existingTable1.setDescriptionTypeChb152(table1.getDescriptionTypeChb152());
                }
                if (table1.getCodeTypeChb153() != null) {
                    existingTable1.setCodeTypeChb153(table1.getCodeTypeChb153());
                }
                if (table1.getClassChb154() != null) {
                    existingTable1.setClassChb154(table1.getClassChb154());
                }
                if (table1.getCaractChb155() != null) {
                    existingTable1.setCaractChb155(table1.getCaractChb155());
                }
                if (table1.getTypeChbDeReservation156() != null) {
                    existingTable1.setTypeChbDeReservation156(table1.getTypeChbDeReservation156());
                }
                if (table1.getDescriptionTypeChbDeResv157() != null) {
                    existingTable1.setDescriptionTypeChbDeResv157(table1.getDescriptionTypeChbDeResv157());
                }
                if (table1.getCodeTypeChbDeResv158() != null) {
                    existingTable1.setCodeTypeChbDeResv158(table1.getCodeTypeChbDeResv158());
                }
                if (table1.getStatutDeReservation159() != null) {
                    existingTable1.setStatutDeReservation159(table1.getStatutDeReservation159());
                }
                if (table1.getCircuitDistribution160() != null) {
                    existingTable1.setCircuitDistribution160(table1.getCircuitDistribution160());
                }
                if (table1.getCircuitDistribUserRegroup161() != null) {
                    existingTable1.setCircuitDistribUserRegroup161(table1.getCircuitDistribUserRegroup161());
                }
                if (table1.getNumCrs162() != null) {
                    existingTable1.setNumCrs162(table1.getNumCrs162());
                }
                if (table1.getTypeRefCrs163() != null) {
                    existingTable1.setTypeRefCrs163(table1.getTypeRefCrs163());
                }
                if (table1.getCrsInsertDate164() != null) {
                    existingTable1.setCrsInsertDate164(table1.getCrsInsertDate164());
                }
                if (table1.getDateCreaResv165() != null) {
                    existingTable1.setDateCreaResv165(table1.getDateCreaResv165());
                }
                if (table1.getDatePremier166() != null) {
                    existingTable1.setDatePremier166(table1.getDatePremier166());
                }
                if (table1.getStatutPremier167() != null) {
                    existingTable1.setStatutPremier167(table1.getStatutPremier167());
                }
                if (table1.getDateDernier168() != null) {
                    existingTable1.setDateDernier168(table1.getDateDernier168());
                }
                if (table1.getStatutDernier169() != null) {
                    existingTable1.setStatutDernier169(table1.getStatutDernier169());
                }
                if (table1.getDateDernierPseudo170() != null) {
                    existingTable1.setDateDernierPseudo170(table1.getDateDernierPseudo170());
                }
                if (table1.getStatutDernierPseudo171() != null) {
                    existingTable1.setStatutDernierPseudo171(table1.getStatutDernierPseudo171());
                }
                if (table1.getDiffDtCreaAnn172() != null) {
                    existingTable1.setDiffDtCreaAnn172(table1.getDiffDtCreaAnn172());
                }
                if (table1.getDiffDtArrAnn173() != null) {
                    existingTable1.setDiffDtArrAnn173(table1.getDiffDtArrAnn173());
                }
                if (table1.getLeadtime174() != null) {
                    existingTable1.setLeadtime174(table1.getLeadtime174());
                }
                if (table1.getLos175() != null) {
                    existingTable1.setLos175(table1.getLos175());
                }
                if (table1.getOccupantsGroupe176() != null) {
                    existingTable1.setOccupantsGroupe176(table1.getOccupantsGroupe176());
                }
                if (table1.getNbNuitee177() != null) {
                    existingTable1.setNbNuitee177(table1.getNbNuitee177());
                }
                if (table1.getNbNuiteeNnDed178() != null) {
                    existingTable1.setNbNuiteeNnDed178(table1.getNbNuiteeNnDed178());
                }
                if (table1.getNbResvAnn179() != null) {
                    existingTable1.setNbResvAnn179(table1.getNbResvAnn179());
                }
                if (table1.getNbAdu180() != null) {
                    existingTable1.setNbAdu180(table1.getNbAdu180());
                }
                if (table1.getNbEnf181() != null) {
                    existingTable1.setNbEnf181(table1.getNbEnf181());
                }
                if (table1.getNbPersDayU182() != null) {
                    existingTable1.setNbPersDayU182(table1.getNbPersDayU182());
                }
                if (table1.getNbPersArr183() != null) {
                    existingTable1.setNbPersArr183(table1.getNbPersArr183());
                }
                if (table1.getNbPersDep184() != null) {
                    existingTable1.setNbPersDep184(table1.getNbPersDep184());
                }
                if (table1.getNbPersAnn185() != null) {
                    existingTable1.setNbPersAnn185(table1.getNbPersAnn185());
                }
                if (table1.getNbPersNoshow186() != null) {
                    existingTable1.setNbPersNoshow186(table1.getNbPersNoshow186());
                }
                if (table1.getNbChbDayU187() != null) {
                    existingTable1.setNbChbDayU187(table1.getNbChbDayU187());
                }
                if (table1.getNbChbArr188() != null) {
                    existingTable1.setNbChbArr188(table1.getNbChbArr188());
                }
                if (table1.getNbChbDep189() != null) {
                    existingTable1.setNbChbDep189(table1.getNbChbDep189());
                }
                if (table1.getNbChbAnn190() != null) {
                    existingTable1.setNbChbAnn190(table1.getNbChbAnn190());
                }
                if (table1.getNbChbNoshow191() != null) {
                    existingTable1.setNbChbNoshow191(table1.getNbChbNoshow191());
                }
                if (table1.getRevenuNetChambre192() != null) {
                    existingTable1.setRevenuNetChambre192(table1.getRevenuNetChambre192());
                }
                if (table1.getRevenuTaxeChambre193() != null) {
                    existingTable1.setRevenuTaxeChambre193(table1.getRevenuTaxeChambre193());
                }
                if (table1.getRevenuNetChambreGlobal194() != null) {
                    existingTable1.setRevenuNetChambreGlobal194(table1.getRevenuNetChambreGlobal194());
                }
                if (table1.getRevenuTaxeChambreGlobal195() != null) {
                    existingTable1.setRevenuTaxeChambreGlobal195(table1.getRevenuTaxeChambreGlobal195());
                }
                if (table1.getRevenuNetBq196() != null) {
                    existingTable1.setRevenuNetBq196(table1.getRevenuNetBq196());
                }
                if (table1.getRevenuTaxeBq197() != null) {
                    existingTable1.setRevenuTaxeBq197(table1.getRevenuTaxeBq197());
                }
                if (table1.getRevenuNetBqGlobal198() != null) {
                    existingTable1.setRevenuNetBqGlobal198(table1.getRevenuNetBqGlobal198());
                }
                if (table1.getRevenuTaxeBqGlobal199() != null) {
                    existingTable1.setRevenuTaxeBqGlobal199(table1.getRevenuTaxeBqGlobal199());
                }
                if (table1.getRevenuNetExtra200() != null) {
                    existingTable1.setRevenuNetExtra200(table1.getRevenuNetExtra200());
                }
                if (table1.getRevenuTaxeExtra201() != null) {
                    existingTable1.setRevenuTaxeExtra201(table1.getRevenuTaxeExtra201());
                }
                if (table1.getRevenuNetExtraGlobal202() != null) {
                    existingTable1.setRevenuNetExtraGlobal202(table1.getRevenuNetExtraGlobal202());
                }
                if (table1.getRevenuTaxeExtraGlobal203() != null) {
                    existingTable1.setRevenuTaxeExtraGlobal203(table1.getRevenuTaxeExtraGlobal203());
                }
                if (table1.getRevenuNetTotal204() != null) {
                    existingTable1.setRevenuNetTotal204(table1.getRevenuNetTotal204());
                }
                if (table1.getRevenuTaxeTotal205() != null) {
                    existingTable1.setRevenuTaxeTotal205(table1.getRevenuTaxeTotal205());
                }
                if (table1.getRevenuNetTotalGlobal206() != null) {
                    existingTable1.setRevenuNetTotalGlobal206(table1.getRevenuNetTotalGlobal206());
                }
                if (table1.getRevenuTaxeTotalGlobal207() != null) {
                    existingTable1.setRevenuTaxeTotalGlobal207(table1.getRevenuTaxeTotalGlobal207());
                }
                if (table1.getProdRevenuChambre208() != null) {
                    existingTable1.setProdRevenuChambre208(table1.getProdRevenuChambre208());
                }
                if (table1.getProdRevenuBq209() != null) {
                    existingTable1.setProdRevenuBq209(table1.getProdRevenuBq209());
                }
                if (table1.getProdRevenuExtra210() != null) {
                    existingTable1.setProdRevenuExtra210(table1.getProdRevenuExtra210());
                }
                if (table1.getProdRevenuTotal211() != null) {
                    existingTable1.setProdRevenuTotal211(table1.getProdRevenuTotal211());
                }
                if (table1.getProdChambreNbNuitees212() != null) {
                    existingTable1.setProdChambreNbNuitees212(table1.getProdChambreNbNuitees212());
                }
                if (table1.getTechCreateDate213() != null) {
                    existingTable1.setTechCreateDate213(table1.getTechCreateDate213());
                }
                if (table1.getTechUpdateDate214() != null) {
                    existingTable1.setTechUpdateDate214(table1.getTechUpdateDate214());
                }
                if (table1.getNumLigne215() != null) {
                    existingTable1.setNumLigne215(table1.getNumLigne215());
                }
                if (table1.getResort216() != null) {
                    existingTable1.setResort216(table1.getResort216());
                }
                if (table1.getResvNameId217() != null) {
                    existingTable1.setResvNameId217(table1.getResvNameId217());
                }
                if (table1.getClientOId218() != null) {
                    existingTable1.setClientOId218(table1.getClientOId218());
                }
                if (table1.getTypeChb219() != null) {
                    existingTable1.setTypeChb219(table1.getTypeChb219());
                }
                if (table1.getConfirmationNo220() != null) {
                    existingTable1.setConfirmationNo220(table1.getConfirmationNo220());
                }
                if (table1.getClientMdmId221() != null) {
                    existingTable1.setClientMdmId221(table1.getClientMdmId221());
                }
                if (table1.getNameId222() != null) {
                    existingTable1.setNameId222(table1.getNameId222());
                }
                if (table1.getParentResvNameId223() != null) {
                    existingTable1.setParentResvNameId223(table1.getParentResvNameId223());
                }
                if (table1.getContactId224() != null) {
                    existingTable1.setContactId224(table1.getContactId224());
                }
                if (table1.getAgenceId225() != null) {
                    existingTable1.setAgenceId225(table1.getAgenceId225());
                }
                if (table1.getAgenceNom226() != null) {
                    existingTable1.setAgenceNom226(table1.getAgenceNom226());
                }
                if (table1.getSocieteId227() != null) {
                    existingTable1.setSocieteId227(table1.getSocieteId227());
                }
                if (table1.getGroupeId228() != null) {
                    existingTable1.setGroupeId228(table1.getGroupeId228());
                }
                if (table1.getNumBloc229() != null) {
                    existingTable1.setNumBloc229(table1.getNumBloc229());
                }
                if (table1.getTypeResv230() != null) {
                    existingTable1.setTypeResv230(table1.getTypeResv230());
                }
                if (table1.getStatutResv231() != null) {
                    existingTable1.setStatutResv231(table1.getStatutResv231());
                }
                if (table1.getDateDebutResv232() != null) {
                    existingTable1.setDateDebutResv232(table1.getDateDebutResv232());
                }
                if (table1.getDateFinResv233() != null) {
                    existingTable1.setDateFinResv233(table1.getDateFinResv233());
                }
                if (table1.getTruncDateDebutResv234() != null) {
                    existingTable1.setTruncDateDebutResv234(table1.getTruncDateDebutResv234());
                }
                if (table1.getTruncDateFinResv235() != null) {
                    existingTable1.setTruncDateFinResv235(table1.getTruncDateFinResv235());
                }
                if (table1.getDateAnnResv236() != null) {
                    existingTable1.setDateAnnResv236(table1.getDateAnnResv236());
                }
                if (table1.getPseudoRoomYn237() != null) {
                    existingTable1.setPseudoRoomYn237(table1.getPseudoRoomYn237());
                }
                if (table1.getCreateurResv238() != null) {
                    existingTable1.setCreateurResv238(table1.getCreateurResv238());
                }
                if (table1.getNomCreateurResv239() != null) {
                    existingTable1.setNomCreateurResv239(table1.getNomCreateurResv239());
                }
                if (table1.getCodeGarantie240() != null) {
                    existingTable1.setCodeGarantie240(table1.getCodeGarantie240());
                }
                if (table1.getFlgDed241() != null) {
                    existingTable1.setFlgDed241(table1.getFlgDed241());
                }
                if (table1.getCodePays242() != null) {
                    existingTable1.setCodePays242(table1.getCodePays242());
                }
                if (table1.getLibPays243() != null) {
                    existingTable1.setLibPays243(table1.getLibPays243());
                }
                if (table1.getCodeNationalite244() != null) {
                    existingTable1.setCodeNationalite244(table1.getCodeNationalite244());
                }
                if (table1.getLibNationalite245() != null) {
                    existingTable1.setLibNationalite245(table1.getLibNationalite245());
                }
                if (table1.getCodeSource246() != null) {
                    existingTable1.setCodeSource246(table1.getCodeSource246());
                }
                if (table1.getLibSource247() != null) {
                    existingTable1.setLibSource247(table1.getLibSource247());
                }
                if (table1.getCodeGrandSource248() != null) {
                    existingTable1.setCodeGrandSource248(table1.getCodeGrandSource248());
                }
                if (table1.getCodeOrigine249() != null) {
                    existingTable1.setCodeOrigine249(table1.getCodeOrigine249());
                }
                if (table1.getLibOrigine250() != null) {
                    existingTable1.setLibOrigine250(table1.getLibOrigine250());
                }
                if (table1.getCodeMarche251() != null) {
                    existingTable1.setCodeMarche251(table1.getCodeMarche251());
                }
                if (table1.getLibMarche252() != null) {
                    existingTable1.setLibMarche252(table1.getLibMarche252());
                }
                if (table1.getCodeGrandMarche253() != null) {
                    existingTable1.setCodeGrandMarche253(table1.getCodeGrandMarche253());
                }
                if (table1.getLibGrandMarche254() != null) {
                    existingTable1.setLibGrandMarche254(table1.getLibGrandMarche254());
                }
                if (table1.getCodePrix255() != null) {
                    existingTable1.setCodePrix255(table1.getCodePrix255());
                }
                if (table1.getCategPrix256() != null) {
                    existingTable1.setCategPrix256(table1.getCategPrix256());
                }
                if (table1.getLibPrix257() != null) {
                    existingTable1.setLibPrix257(table1.getLibPrix257());
                }
                if (table1.getNumChb258() != null) {
                    existingTable1.setNumChb258(table1.getNumChb258());
                }
                if (table1.getDescriptionTypeChb259() != null) {
                    existingTable1.setDescriptionTypeChb259(table1.getDescriptionTypeChb259());
                }
                if (table1.getCodeTypeChb260() != null) {
                    existingTable1.setCodeTypeChb260(table1.getCodeTypeChb260());
                }
                if (table1.getClassChb261() != null) {
                    existingTable1.setClassChb261(table1.getClassChb261());
                }
                if (table1.getCaractChb262() != null) {
                    existingTable1.setCaractChb262(table1.getCaractChb262());
                }
                if (table1.getTypeChbDeReservation263() != null) {
                    existingTable1.setTypeChbDeReservation263(table1.getTypeChbDeReservation263());
                }
                if (table1.getDescriptionTypeChbDeResv264() != null) {
                    existingTable1.setDescriptionTypeChbDeResv264(table1.getDescriptionTypeChbDeResv264());
                }
                if (table1.getCodeTypeChbDeResv265() != null) {
                    existingTable1.setCodeTypeChbDeResv265(table1.getCodeTypeChbDeResv265());
                }
                if (table1.getStatutDeReservation266() != null) {
                    existingTable1.setStatutDeReservation266(table1.getStatutDeReservation266());
                }
                if (table1.getCircuitDistribution267() != null) {
                    existingTable1.setCircuitDistribution267(table1.getCircuitDistribution267());
                }
                if (table1.getCircuitDistribUserRegroup268() != null) {
                    existingTable1.setCircuitDistribUserRegroup268(table1.getCircuitDistribUserRegroup268());
                }
                if (table1.getNumCrs269() != null) {
                    existingTable1.setNumCrs269(table1.getNumCrs269());
                }
                if (table1.getTypeRefCrs270() != null) {
                    existingTable1.setTypeRefCrs270(table1.getTypeRefCrs270());
                }
                if (table1.getCrsInsertDate271() != null) {
                    existingTable1.setCrsInsertDate271(table1.getCrsInsertDate271());
                }
                if (table1.getDateCreaResv272() != null) {
                    existingTable1.setDateCreaResv272(table1.getDateCreaResv272());
                }
                if (table1.getDatePremier273() != null) {
                    existingTable1.setDatePremier273(table1.getDatePremier273());
                }
                if (table1.getStatutPremier274() != null) {
                    existingTable1.setStatutPremier274(table1.getStatutPremier274());
                }
                if (table1.getDateDernier275() != null) {
                    existingTable1.setDateDernier275(table1.getDateDernier275());
                }
                if (table1.getStatutDernier276() != null) {
                    existingTable1.setStatutDernier276(table1.getStatutDernier276());
                }
                if (table1.getDateDernierPseudo277() != null) {
                    existingTable1.setDateDernierPseudo277(table1.getDateDernierPseudo277());
                }
                if (table1.getStatutDernierPseudo278() != null) {
                    existingTable1.setStatutDernierPseudo278(table1.getStatutDernierPseudo278());
                }
                if (table1.getDiffDtCreaAnn279() != null) {
                    existingTable1.setDiffDtCreaAnn279(table1.getDiffDtCreaAnn279());
                }
                if (table1.getDiffDtArrAnn280() != null) {
                    existingTable1.setDiffDtArrAnn280(table1.getDiffDtArrAnn280());
                }
                if (table1.getLeadtime281() != null) {
                    existingTable1.setLeadtime281(table1.getLeadtime281());
                }
                if (table1.getLos282() != null) {
                    existingTable1.setLos282(table1.getLos282());
                }
                if (table1.getOccupantsGroupe283() != null) {
                    existingTable1.setOccupantsGroupe283(table1.getOccupantsGroupe283());
                }
                if (table1.getNbNuitee284() != null) {
                    existingTable1.setNbNuitee284(table1.getNbNuitee284());
                }
                if (table1.getNbNuiteeNnDed285() != null) {
                    existingTable1.setNbNuiteeNnDed285(table1.getNbNuiteeNnDed285());
                }
                if (table1.getNbResvAnn286() != null) {
                    existingTable1.setNbResvAnn286(table1.getNbResvAnn286());
                }
                if (table1.getNbAdu287() != null) {
                    existingTable1.setNbAdu287(table1.getNbAdu287());
                }
                if (table1.getNbEnf288() != null) {
                    existingTable1.setNbEnf288(table1.getNbEnf288());
                }
                if (table1.getNbPersDayU289() != null) {
                    existingTable1.setNbPersDayU289(table1.getNbPersDayU289());
                }
                if (table1.getNbPersArr290() != null) {
                    existingTable1.setNbPersArr290(table1.getNbPersArr290());
                }
                if (table1.getNbPersDep291() != null) {
                    existingTable1.setNbPersDep291(table1.getNbPersDep291());
                }
                if (table1.getNbPersAnn292() != null) {
                    existingTable1.setNbPersAnn292(table1.getNbPersAnn292());
                }
                if (table1.getNbPersNoshow293() != null) {
                    existingTable1.setNbPersNoshow293(table1.getNbPersNoshow293());
                }
                if (table1.getNbChbDayU294() != null) {
                    existingTable1.setNbChbDayU294(table1.getNbChbDayU294());
                }
                if (table1.getNbChbArr295() != null) {
                    existingTable1.setNbChbArr295(table1.getNbChbArr295());
                }
                if (table1.getNbChbDep296() != null) {
                    existingTable1.setNbChbDep296(table1.getNbChbDep296());
                }
                if (table1.getNbChbAnn297() != null) {
                    existingTable1.setNbChbAnn297(table1.getNbChbAnn297());
                }
                if (table1.getNbChbNoshow298() != null) {
                    existingTable1.setNbChbNoshow298(table1.getNbChbNoshow298());
                }
                if (table1.getRevenuNetChambre299() != null) {
                    existingTable1.setRevenuNetChambre299(table1.getRevenuNetChambre299());
                }
                if (table1.getRevenuTaxeChambre300() != null) {
                    existingTable1.setRevenuTaxeChambre300(table1.getRevenuTaxeChambre300());
                }
                if (table1.getRevenuNetChambreGlobal301() != null) {
                    existingTable1.setRevenuNetChambreGlobal301(table1.getRevenuNetChambreGlobal301());
                }
                if (table1.getRevenuTaxeChambreGlobal302() != null) {
                    existingTable1.setRevenuTaxeChambreGlobal302(table1.getRevenuTaxeChambreGlobal302());
                }
                if (table1.getRevenuNetBq303() != null) {
                    existingTable1.setRevenuNetBq303(table1.getRevenuNetBq303());
                }
                if (table1.getRevenuTaxeBq304() != null) {
                    existingTable1.setRevenuTaxeBq304(table1.getRevenuTaxeBq304());
                }
                if (table1.getRevenuNetBqGlobal305() != null) {
                    existingTable1.setRevenuNetBqGlobal305(table1.getRevenuNetBqGlobal305());
                }
                if (table1.getRevenuTaxeBqGlobal306() != null) {
                    existingTable1.setRevenuTaxeBqGlobal306(table1.getRevenuTaxeBqGlobal306());
                }
                if (table1.getRevenuNetExtra307() != null) {
                    existingTable1.setRevenuNetExtra307(table1.getRevenuNetExtra307());
                }
                if (table1.getRevenuTaxeExtra308() != null) {
                    existingTable1.setRevenuTaxeExtra308(table1.getRevenuTaxeExtra308());
                }
                if (table1.getRevenuNetExtraGlobal309() != null) {
                    existingTable1.setRevenuNetExtraGlobal309(table1.getRevenuNetExtraGlobal309());
                }
                if (table1.getRevenuTaxeExtraGlobal310() != null) {
                    existingTable1.setRevenuTaxeExtraGlobal310(table1.getRevenuTaxeExtraGlobal310());
                }

                return existingTable1;
            })
            .map(table1Repository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table1.getId().toString())
        );
    }

    /**
     * {@code GET  /table-1-s} : get all the table1s.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of table1s in body.
     */
    @GetMapping("")
    public List<Table1> getAllTable1s() {
        log.debug("REST request to get all Table1s");
        return table1Repository.findAll();
    }

    /**
     * {@code GET  /table-1-s/:id} : get the "id" table1.
     *
     * @param id the id of the table1 to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the table1, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Table1> getTable1(@PathVariable("id") Long id) {
        log.debug("REST request to get Table1 : {}", id);
        Optional<Table1> table1 = table1Repository.findById(id);
        return ResponseUtil.wrapOrNotFound(table1);
    }

    /**
     * {@code DELETE  /table-1-s/:id} : delete the "id" table1.
     *
     * @param id the id of the table1 to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTable1(@PathVariable("id") Long id) {
        log.debug("REST request to delete Table1 : {}", id);
        table1Repository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
