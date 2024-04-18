package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Table2;
import com.mycompany.myapp.repository.Table2Repository;
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
 * REST controller for managing {@link com.mycompany.myapp.domain.Table2}.
 */
@RestController
@RequestMapping("/api/table-2-s")
@Transactional
public class Table2Resource {

    private final Logger log = LoggerFactory.getLogger(Table2Resource.class);

    private static final String ENTITY_NAME = "accessSampleApplicationTable2";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final Table2Repository table2Repository;

    public Table2Resource(Table2Repository table2Repository) {
        this.table2Repository = table2Repository;
    }

    /**
     * {@code POST  /table-2-s} : Create a new table2.
     *
     * @param table2 the table2 to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new table2, or with status {@code 400 (Bad Request)} if the table2 has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Table2> createTable2(@RequestBody Table2 table2) throws URISyntaxException {
        log.debug("REST request to save Table2 : {}", table2);
        if (table2.getId() != null) {
            throw new BadRequestAlertException("A new table2 cannot already have an ID", ENTITY_NAME, "idexists");
        }
        table2 = table2Repository.save(table2);
        return ResponseEntity.created(new URI("/api/table-2-s/" + table2.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, table2.getId().toString()))
            .body(table2);
    }

    /**
     * {@code PUT  /table-2-s/:id} : Updates an existing table2.
     *
     * @param id the id of the table2 to save.
     * @param table2 the table2 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table2,
     * or with status {@code 400 (Bad Request)} if the table2 is not valid,
     * or with status {@code 500 (Internal Server Error)} if the table2 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Table2> updateTable2(@PathVariable(value = "id", required = false) final Long id, @RequestBody Table2 table2)
        throws URISyntaxException {
        log.debug("REST request to update Table2 : {}, {}", id, table2);
        if (table2.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table2.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table2Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        table2 = table2Repository.save(table2);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table2.getId().toString()))
            .body(table2);
    }

    /**
     * {@code PATCH  /table-2-s/:id} : Partial updates given fields of an existing table2, field will ignore if it is null
     *
     * @param id the id of the table2 to save.
     * @param table2 the table2 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table2,
     * or with status {@code 400 (Bad Request)} if the table2 is not valid,
     * or with status {@code 404 (Not Found)} if the table2 is not found,
     * or with status {@code 500 (Internal Server Error)} if the table2 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Table2> partialUpdateTable2(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Table2 table2
    ) throws URISyntaxException {
        log.debug("REST request to partial update Table2 partially : {}, {}", id, table2);
        if (table2.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table2.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table2Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Table2> result = table2Repository
            .findById(table2.getId())
            .map(existingTable2 -> {
                if (table2.getNumLigne1() != null) {
                    existingTable2.setNumLigne1(table2.getNumLigne1());
                }
                if (table2.getResort2() != null) {
                    existingTable2.setResort2(table2.getResort2());
                }
                if (table2.getResvNameId3() != null) {
                    existingTable2.setResvNameId3(table2.getResvNameId3());
                }
                if (table2.getClientOId4() != null) {
                    existingTable2.setClientOId4(table2.getClientOId4());
                }
                if (table2.getTypeChb5() != null) {
                    existingTable2.setTypeChb5(table2.getTypeChb5());
                }
                if (table2.getConfirmationNo6() != null) {
                    existingTable2.setConfirmationNo6(table2.getConfirmationNo6());
                }
                if (table2.getClientMdmId7() != null) {
                    existingTable2.setClientMdmId7(table2.getClientMdmId7());
                }
                if (table2.getNameId8() != null) {
                    existingTable2.setNameId8(table2.getNameId8());
                }
                if (table2.getParentResvNameId9() != null) {
                    existingTable2.setParentResvNameId9(table2.getParentResvNameId9());
                }
                if (table2.getContactId10() != null) {
                    existingTable2.setContactId10(table2.getContactId10());
                }
                if (table2.getAgenceId11() != null) {
                    existingTable2.setAgenceId11(table2.getAgenceId11());
                }
                if (table2.getAgenceNom12() != null) {
                    existingTable2.setAgenceNom12(table2.getAgenceNom12());
                }
                if (table2.getSocieteId13() != null) {
                    existingTable2.setSocieteId13(table2.getSocieteId13());
                }
                if (table2.getGroupeId14() != null) {
                    existingTable2.setGroupeId14(table2.getGroupeId14());
                }
                if (table2.getNumBloc15() != null) {
                    existingTable2.setNumBloc15(table2.getNumBloc15());
                }
                if (table2.getTypeResv16() != null) {
                    existingTable2.setTypeResv16(table2.getTypeResv16());
                }
                if (table2.getStatutResv17() != null) {
                    existingTable2.setStatutResv17(table2.getStatutResv17());
                }
                if (table2.getDateDebutResv18() != null) {
                    existingTable2.setDateDebutResv18(table2.getDateDebutResv18());
                }
                if (table2.getDateFinResv19() != null) {
                    existingTable2.setDateFinResv19(table2.getDateFinResv19());
                }
                if (table2.getTruncDateDebutResv20() != null) {
                    existingTable2.setTruncDateDebutResv20(table2.getTruncDateDebutResv20());
                }
                if (table2.getTruncDateFinResv21() != null) {
                    existingTable2.setTruncDateFinResv21(table2.getTruncDateFinResv21());
                }
                if (table2.getDateAnnResv22() != null) {
                    existingTable2.setDateAnnResv22(table2.getDateAnnResv22());
                }
                if (table2.getPseudoRoomYn23() != null) {
                    existingTable2.setPseudoRoomYn23(table2.getPseudoRoomYn23());
                }
                if (table2.getCreateurResv24() != null) {
                    existingTable2.setCreateurResv24(table2.getCreateurResv24());
                }
                if (table2.getNomCreateurResv25() != null) {
                    existingTable2.setNomCreateurResv25(table2.getNomCreateurResv25());
                }
                if (table2.getCodeGarantie26() != null) {
                    existingTable2.setCodeGarantie26(table2.getCodeGarantie26());
                }
                if (table2.getFlgDed27() != null) {
                    existingTable2.setFlgDed27(table2.getFlgDed27());
                }
                if (table2.getCodePays28() != null) {
                    existingTable2.setCodePays28(table2.getCodePays28());
                }
                if (table2.getLibPays29() != null) {
                    existingTable2.setLibPays29(table2.getLibPays29());
                }
                if (table2.getCodeNationalite30() != null) {
                    existingTable2.setCodeNationalite30(table2.getCodeNationalite30());
                }
                if (table2.getLibNationalite31() != null) {
                    existingTable2.setLibNationalite31(table2.getLibNationalite31());
                }
                if (table2.getCodeSource32() != null) {
                    existingTable2.setCodeSource32(table2.getCodeSource32());
                }
                if (table2.getLibSource33() != null) {
                    existingTable2.setLibSource33(table2.getLibSource33());
                }
                if (table2.getCodeGrandSource34() != null) {
                    existingTable2.setCodeGrandSource34(table2.getCodeGrandSource34());
                }
                if (table2.getCodeOrigine35() != null) {
                    existingTable2.setCodeOrigine35(table2.getCodeOrigine35());
                }
                if (table2.getLibOrigine36() != null) {
                    existingTable2.setLibOrigine36(table2.getLibOrigine36());
                }
                if (table2.getCodeMarche37() != null) {
                    existingTable2.setCodeMarche37(table2.getCodeMarche37());
                }
                if (table2.getLibMarche38() != null) {
                    existingTable2.setLibMarche38(table2.getLibMarche38());
                }
                if (table2.getCodeGrandMarche39() != null) {
                    existingTable2.setCodeGrandMarche39(table2.getCodeGrandMarche39());
                }
                if (table2.getLibGrandMarche40() != null) {
                    existingTable2.setLibGrandMarche40(table2.getLibGrandMarche40());
                }
                if (table2.getCodePrix41() != null) {
                    existingTable2.setCodePrix41(table2.getCodePrix41());
                }
                if (table2.getCategPrix42() != null) {
                    existingTable2.setCategPrix42(table2.getCategPrix42());
                }
                if (table2.getLibPrix43() != null) {
                    existingTable2.setLibPrix43(table2.getLibPrix43());
                }
                if (table2.getNumChb44() != null) {
                    existingTable2.setNumChb44(table2.getNumChb44());
                }
                if (table2.getDescriptionTypeChb45() != null) {
                    existingTable2.setDescriptionTypeChb45(table2.getDescriptionTypeChb45());
                }
                if (table2.getCodeTypeChb46() != null) {
                    existingTable2.setCodeTypeChb46(table2.getCodeTypeChb46());
                }
                if (table2.getClassChb47() != null) {
                    existingTable2.setClassChb47(table2.getClassChb47());
                }
                if (table2.getCaractChb48() != null) {
                    existingTable2.setCaractChb48(table2.getCaractChb48());
                }
                if (table2.getTypeChbDeReservation49() != null) {
                    existingTable2.setTypeChbDeReservation49(table2.getTypeChbDeReservation49());
                }
                if (table2.getDescriptionTypeChbDeResv50() != null) {
                    existingTable2.setDescriptionTypeChbDeResv50(table2.getDescriptionTypeChbDeResv50());
                }
                if (table2.getCodeTypeChbDeResv51() != null) {
                    existingTable2.setCodeTypeChbDeResv51(table2.getCodeTypeChbDeResv51());
                }
                if (table2.getStatutDeReservation52() != null) {
                    existingTable2.setStatutDeReservation52(table2.getStatutDeReservation52());
                }
                if (table2.getCircuitDistribution53() != null) {
                    existingTable2.setCircuitDistribution53(table2.getCircuitDistribution53());
                }
                if (table2.getCircuitDistribUserRegroup54() != null) {
                    existingTable2.setCircuitDistribUserRegroup54(table2.getCircuitDistribUserRegroup54());
                }
                if (table2.getNumCrs55() != null) {
                    existingTable2.setNumCrs55(table2.getNumCrs55());
                }
                if (table2.getTypeRefCrs56() != null) {
                    existingTable2.setTypeRefCrs56(table2.getTypeRefCrs56());
                }
                if (table2.getCrsInsertDate57() != null) {
                    existingTable2.setCrsInsertDate57(table2.getCrsInsertDate57());
                }
                if (table2.getDateCreaResv58() != null) {
                    existingTable2.setDateCreaResv58(table2.getDateCreaResv58());
                }
                if (table2.getDatePremier59() != null) {
                    existingTable2.setDatePremier59(table2.getDatePremier59());
                }
                if (table2.getStatutPremier60() != null) {
                    existingTable2.setStatutPremier60(table2.getStatutPremier60());
                }
                if (table2.getDateDernier61() != null) {
                    existingTable2.setDateDernier61(table2.getDateDernier61());
                }
                if (table2.getStatutDernier62() != null) {
                    existingTable2.setStatutDernier62(table2.getStatutDernier62());
                }
                if (table2.getDateDernierPseudo63() != null) {
                    existingTable2.setDateDernierPseudo63(table2.getDateDernierPseudo63());
                }
                if (table2.getStatutDernierPseudo64() != null) {
                    existingTable2.setStatutDernierPseudo64(table2.getStatutDernierPseudo64());
                }
                if (table2.getDiffDtCreaAnn65() != null) {
                    existingTable2.setDiffDtCreaAnn65(table2.getDiffDtCreaAnn65());
                }
                if (table2.getDiffDtArrAnn66() != null) {
                    existingTable2.setDiffDtArrAnn66(table2.getDiffDtArrAnn66());
                }
                if (table2.getLeadtime67() != null) {
                    existingTable2.setLeadtime67(table2.getLeadtime67());
                }
                if (table2.getLos68() != null) {
                    existingTable2.setLos68(table2.getLos68());
                }
                if (table2.getOccupantsGroupe69() != null) {
                    existingTable2.setOccupantsGroupe69(table2.getOccupantsGroupe69());
                }
                if (table2.getNbNuitee70() != null) {
                    existingTable2.setNbNuitee70(table2.getNbNuitee70());
                }
                if (table2.getNbNuiteeNnDed71() != null) {
                    existingTable2.setNbNuiteeNnDed71(table2.getNbNuiteeNnDed71());
                }
                if (table2.getNbResvAnn72() != null) {
                    existingTable2.setNbResvAnn72(table2.getNbResvAnn72());
                }
                if (table2.getNbAdu73() != null) {
                    existingTable2.setNbAdu73(table2.getNbAdu73());
                }
                if (table2.getNbEnf74() != null) {
                    existingTable2.setNbEnf74(table2.getNbEnf74());
                }
                if (table2.getNbPersDayU75() != null) {
                    existingTable2.setNbPersDayU75(table2.getNbPersDayU75());
                }
                if (table2.getNbPersArr76() != null) {
                    existingTable2.setNbPersArr76(table2.getNbPersArr76());
                }
                if (table2.getNbPersDep77() != null) {
                    existingTable2.setNbPersDep77(table2.getNbPersDep77());
                }
                if (table2.getNbPersAnn78() != null) {
                    existingTable2.setNbPersAnn78(table2.getNbPersAnn78());
                }
                if (table2.getNbPersNoshow79() != null) {
                    existingTable2.setNbPersNoshow79(table2.getNbPersNoshow79());
                }
                if (table2.getNbChbDayU80() != null) {
                    existingTable2.setNbChbDayU80(table2.getNbChbDayU80());
                }
                if (table2.getNbChbArr81() != null) {
                    existingTable2.setNbChbArr81(table2.getNbChbArr81());
                }
                if (table2.getNbChbDep82() != null) {
                    existingTable2.setNbChbDep82(table2.getNbChbDep82());
                }
                if (table2.getNbChbAnn83() != null) {
                    existingTable2.setNbChbAnn83(table2.getNbChbAnn83());
                }
                if (table2.getNbChbNoshow84() != null) {
                    existingTable2.setNbChbNoshow84(table2.getNbChbNoshow84());
                }
                if (table2.getRevenuNetChambre85() != null) {
                    existingTable2.setRevenuNetChambre85(table2.getRevenuNetChambre85());
                }
                if (table2.getRevenuTaxeChambre86() != null) {
                    existingTable2.setRevenuTaxeChambre86(table2.getRevenuTaxeChambre86());
                }
                if (table2.getRevenuNetChambreGlobal87() != null) {
                    existingTable2.setRevenuNetChambreGlobal87(table2.getRevenuNetChambreGlobal87());
                }
                if (table2.getRevenuTaxeChambreGlobal88() != null) {
                    existingTable2.setRevenuTaxeChambreGlobal88(table2.getRevenuTaxeChambreGlobal88());
                }
                if (table2.getRevenuNetBq89() != null) {
                    existingTable2.setRevenuNetBq89(table2.getRevenuNetBq89());
                }
                if (table2.getRevenuTaxeBq90() != null) {
                    existingTable2.setRevenuTaxeBq90(table2.getRevenuTaxeBq90());
                }
                if (table2.getRevenuNetBqGlobal91() != null) {
                    existingTable2.setRevenuNetBqGlobal91(table2.getRevenuNetBqGlobal91());
                }
                if (table2.getRevenuTaxeBqGlobal92() != null) {
                    existingTable2.setRevenuTaxeBqGlobal92(table2.getRevenuTaxeBqGlobal92());
                }
                if (table2.getRevenuNetExtra93() != null) {
                    existingTable2.setRevenuNetExtra93(table2.getRevenuNetExtra93());
                }
                if (table2.getRevenuTaxeExtra94() != null) {
                    existingTable2.setRevenuTaxeExtra94(table2.getRevenuTaxeExtra94());
                }
                if (table2.getRevenuNetExtraGlobal95() != null) {
                    existingTable2.setRevenuNetExtraGlobal95(table2.getRevenuNetExtraGlobal95());
                }
                if (table2.getRevenuTaxeExtraGlobal96() != null) {
                    existingTable2.setRevenuTaxeExtraGlobal96(table2.getRevenuTaxeExtraGlobal96());
                }
                if (table2.getRevenuNetTotal97() != null) {
                    existingTable2.setRevenuNetTotal97(table2.getRevenuNetTotal97());
                }
                if (table2.getRevenuTaxeTotal98() != null) {
                    existingTable2.setRevenuTaxeTotal98(table2.getRevenuTaxeTotal98());
                }
                if (table2.getRevenuNetTotalGlobal99() != null) {
                    existingTable2.setRevenuNetTotalGlobal99(table2.getRevenuNetTotalGlobal99());
                }
                if (table2.getRevenuTaxeTotalGlobal100() != null) {
                    existingTable2.setRevenuTaxeTotalGlobal100(table2.getRevenuTaxeTotalGlobal100());
                }
                if (table2.getProdRevenuChambre101() != null) {
                    existingTable2.setProdRevenuChambre101(table2.getProdRevenuChambre101());
                }
                if (table2.getProdRevenuBq102() != null) {
                    existingTable2.setProdRevenuBq102(table2.getProdRevenuBq102());
                }
                if (table2.getProdRevenuExtra103() != null) {
                    existingTable2.setProdRevenuExtra103(table2.getProdRevenuExtra103());
                }
                if (table2.getProdRevenuTotal104() != null) {
                    existingTable2.setProdRevenuTotal104(table2.getProdRevenuTotal104());
                }
                if (table2.getProdChambreNbNuitees105() != null) {
                    existingTable2.setProdChambreNbNuitees105(table2.getProdChambreNbNuitees105());
                }
                if (table2.getTechCreateDate106() != null) {
                    existingTable2.setTechCreateDate106(table2.getTechCreateDate106());
                }
                if (table2.getTechUpdateDate107() != null) {
                    existingTable2.setTechUpdateDate107(table2.getTechUpdateDate107());
                }
                if (table2.getNumLigne108() != null) {
                    existingTable2.setNumLigne108(table2.getNumLigne108());
                }
                if (table2.getResort109() != null) {
                    existingTable2.setResort109(table2.getResort109());
                }
                if (table2.getResvNameId110() != null) {
                    existingTable2.setResvNameId110(table2.getResvNameId110());
                }
                if (table2.getClientOId111() != null) {
                    existingTable2.setClientOId111(table2.getClientOId111());
                }
                if (table2.getTypeChb112() != null) {
                    existingTable2.setTypeChb112(table2.getTypeChb112());
                }
                if (table2.getConfirmationNo113() != null) {
                    existingTable2.setConfirmationNo113(table2.getConfirmationNo113());
                }
                if (table2.getClientMdmId114() != null) {
                    existingTable2.setClientMdmId114(table2.getClientMdmId114());
                }
                if (table2.getNameId115() != null) {
                    existingTable2.setNameId115(table2.getNameId115());
                }
                if (table2.getParentResvNameId116() != null) {
                    existingTable2.setParentResvNameId116(table2.getParentResvNameId116());
                }
                if (table2.getContactId117() != null) {
                    existingTable2.setContactId117(table2.getContactId117());
                }
                if (table2.getAgenceId118() != null) {
                    existingTable2.setAgenceId118(table2.getAgenceId118());
                }
                if (table2.getAgenceNom119() != null) {
                    existingTable2.setAgenceNom119(table2.getAgenceNom119());
                }
                if (table2.getSocieteId120() != null) {
                    existingTable2.setSocieteId120(table2.getSocieteId120());
                }
                if (table2.getGroupeId121() != null) {
                    existingTable2.setGroupeId121(table2.getGroupeId121());
                }
                if (table2.getNumBloc122() != null) {
                    existingTable2.setNumBloc122(table2.getNumBloc122());
                }
                if (table2.getTypeResv123() != null) {
                    existingTable2.setTypeResv123(table2.getTypeResv123());
                }
                if (table2.getStatutResv124() != null) {
                    existingTable2.setStatutResv124(table2.getStatutResv124());
                }
                if (table2.getDateDebutResv125() != null) {
                    existingTable2.setDateDebutResv125(table2.getDateDebutResv125());
                }
                if (table2.getDateFinResv126() != null) {
                    existingTable2.setDateFinResv126(table2.getDateFinResv126());
                }
                if (table2.getTruncDateDebutResv127() != null) {
                    existingTable2.setTruncDateDebutResv127(table2.getTruncDateDebutResv127());
                }
                if (table2.getTruncDateFinResv128() != null) {
                    existingTable2.setTruncDateFinResv128(table2.getTruncDateFinResv128());
                }
                if (table2.getDateAnnResv129() != null) {
                    existingTable2.setDateAnnResv129(table2.getDateAnnResv129());
                }
                if (table2.getPseudoRoomYn130() != null) {
                    existingTable2.setPseudoRoomYn130(table2.getPseudoRoomYn130());
                }
                if (table2.getCreateurResv131() != null) {
                    existingTable2.setCreateurResv131(table2.getCreateurResv131());
                }
                if (table2.getNomCreateurResv132() != null) {
                    existingTable2.setNomCreateurResv132(table2.getNomCreateurResv132());
                }
                if (table2.getCodeGarantie133() != null) {
                    existingTable2.setCodeGarantie133(table2.getCodeGarantie133());
                }
                if (table2.getFlgDed134() != null) {
                    existingTable2.setFlgDed134(table2.getFlgDed134());
                }
                if (table2.getCodePays135() != null) {
                    existingTable2.setCodePays135(table2.getCodePays135());
                }
                if (table2.getLibPays136() != null) {
                    existingTable2.setLibPays136(table2.getLibPays136());
                }
                if (table2.getCodeNationalite137() != null) {
                    existingTable2.setCodeNationalite137(table2.getCodeNationalite137());
                }
                if (table2.getLibNationalite138() != null) {
                    existingTable2.setLibNationalite138(table2.getLibNationalite138());
                }
                if (table2.getCodeSource139() != null) {
                    existingTable2.setCodeSource139(table2.getCodeSource139());
                }
                if (table2.getLibSource140() != null) {
                    existingTable2.setLibSource140(table2.getLibSource140());
                }
                if (table2.getCodeGrandSource141() != null) {
                    existingTable2.setCodeGrandSource141(table2.getCodeGrandSource141());
                }
                if (table2.getCodeOrigine142() != null) {
                    existingTable2.setCodeOrigine142(table2.getCodeOrigine142());
                }
                if (table2.getLibOrigine143() != null) {
                    existingTable2.setLibOrigine143(table2.getLibOrigine143());
                }
                if (table2.getCodeMarche144() != null) {
                    existingTable2.setCodeMarche144(table2.getCodeMarche144());
                }
                if (table2.getLibMarche145() != null) {
                    existingTable2.setLibMarche145(table2.getLibMarche145());
                }
                if (table2.getCodeGrandMarche146() != null) {
                    existingTable2.setCodeGrandMarche146(table2.getCodeGrandMarche146());
                }
                if (table2.getLibGrandMarche147() != null) {
                    existingTable2.setLibGrandMarche147(table2.getLibGrandMarche147());
                }
                if (table2.getCodePrix148() != null) {
                    existingTable2.setCodePrix148(table2.getCodePrix148());
                }
                if (table2.getCategPrix149() != null) {
                    existingTable2.setCategPrix149(table2.getCategPrix149());
                }
                if (table2.getLibPrix150() != null) {
                    existingTable2.setLibPrix150(table2.getLibPrix150());
                }
                if (table2.getNumChb151() != null) {
                    existingTable2.setNumChb151(table2.getNumChb151());
                }
                if (table2.getDescriptionTypeChb152() != null) {
                    existingTable2.setDescriptionTypeChb152(table2.getDescriptionTypeChb152());
                }
                if (table2.getCodeTypeChb153() != null) {
                    existingTable2.setCodeTypeChb153(table2.getCodeTypeChb153());
                }
                if (table2.getClassChb154() != null) {
                    existingTable2.setClassChb154(table2.getClassChb154());
                }
                if (table2.getCaractChb155() != null) {
                    existingTable2.setCaractChb155(table2.getCaractChb155());
                }
                if (table2.getTypeChbDeReservation156() != null) {
                    existingTable2.setTypeChbDeReservation156(table2.getTypeChbDeReservation156());
                }
                if (table2.getDescriptionTypeChbDeResv157() != null) {
                    existingTable2.setDescriptionTypeChbDeResv157(table2.getDescriptionTypeChbDeResv157());
                }
                if (table2.getCodeTypeChbDeResv158() != null) {
                    existingTable2.setCodeTypeChbDeResv158(table2.getCodeTypeChbDeResv158());
                }
                if (table2.getStatutDeReservation159() != null) {
                    existingTable2.setStatutDeReservation159(table2.getStatutDeReservation159());
                }
                if (table2.getCircuitDistribution160() != null) {
                    existingTable2.setCircuitDistribution160(table2.getCircuitDistribution160());
                }
                if (table2.getCircuitDistribUserRegroup161() != null) {
                    existingTable2.setCircuitDistribUserRegroup161(table2.getCircuitDistribUserRegroup161());
                }
                if (table2.getNumCrs162() != null) {
                    existingTable2.setNumCrs162(table2.getNumCrs162());
                }
                if (table2.getTypeRefCrs163() != null) {
                    existingTable2.setTypeRefCrs163(table2.getTypeRefCrs163());
                }
                if (table2.getCrsInsertDate164() != null) {
                    existingTable2.setCrsInsertDate164(table2.getCrsInsertDate164());
                }
                if (table2.getDateCreaResv165() != null) {
                    existingTable2.setDateCreaResv165(table2.getDateCreaResv165());
                }
                if (table2.getDatePremier166() != null) {
                    existingTable2.setDatePremier166(table2.getDatePremier166());
                }
                if (table2.getStatutPremier167() != null) {
                    existingTable2.setStatutPremier167(table2.getStatutPremier167());
                }
                if (table2.getDateDernier168() != null) {
                    existingTable2.setDateDernier168(table2.getDateDernier168());
                }
                if (table2.getStatutDernier169() != null) {
                    existingTable2.setStatutDernier169(table2.getStatutDernier169());
                }
                if (table2.getDateDernierPseudo170() != null) {
                    existingTable2.setDateDernierPseudo170(table2.getDateDernierPseudo170());
                }
                if (table2.getStatutDernierPseudo171() != null) {
                    existingTable2.setStatutDernierPseudo171(table2.getStatutDernierPseudo171());
                }
                if (table2.getDiffDtCreaAnn172() != null) {
                    existingTable2.setDiffDtCreaAnn172(table2.getDiffDtCreaAnn172());
                }
                if (table2.getDiffDtArrAnn173() != null) {
                    existingTable2.setDiffDtArrAnn173(table2.getDiffDtArrAnn173());
                }
                if (table2.getLeadtime174() != null) {
                    existingTable2.setLeadtime174(table2.getLeadtime174());
                }
                if (table2.getLos175() != null) {
                    existingTable2.setLos175(table2.getLos175());
                }
                if (table2.getOccupantsGroupe176() != null) {
                    existingTable2.setOccupantsGroupe176(table2.getOccupantsGroupe176());
                }
                if (table2.getNbNuitee177() != null) {
                    existingTable2.setNbNuitee177(table2.getNbNuitee177());
                }
                if (table2.getNbNuiteeNnDed178() != null) {
                    existingTable2.setNbNuiteeNnDed178(table2.getNbNuiteeNnDed178());
                }
                if (table2.getNbResvAnn179() != null) {
                    existingTable2.setNbResvAnn179(table2.getNbResvAnn179());
                }
                if (table2.getNbAdu180() != null) {
                    existingTable2.setNbAdu180(table2.getNbAdu180());
                }
                if (table2.getNbEnf181() != null) {
                    existingTable2.setNbEnf181(table2.getNbEnf181());
                }
                if (table2.getNbPersDayU182() != null) {
                    existingTable2.setNbPersDayU182(table2.getNbPersDayU182());
                }
                if (table2.getNbPersArr183() != null) {
                    existingTable2.setNbPersArr183(table2.getNbPersArr183());
                }
                if (table2.getNbPersDep184() != null) {
                    existingTable2.setNbPersDep184(table2.getNbPersDep184());
                }
                if (table2.getNbPersAnn185() != null) {
                    existingTable2.setNbPersAnn185(table2.getNbPersAnn185());
                }
                if (table2.getNbPersNoshow186() != null) {
                    existingTable2.setNbPersNoshow186(table2.getNbPersNoshow186());
                }
                if (table2.getNbChbDayU187() != null) {
                    existingTable2.setNbChbDayU187(table2.getNbChbDayU187());
                }
                if (table2.getNbChbArr188() != null) {
                    existingTable2.setNbChbArr188(table2.getNbChbArr188());
                }
                if (table2.getNbChbDep189() != null) {
                    existingTable2.setNbChbDep189(table2.getNbChbDep189());
                }
                if (table2.getNbChbAnn190() != null) {
                    existingTable2.setNbChbAnn190(table2.getNbChbAnn190());
                }
                if (table2.getNbChbNoshow191() != null) {
                    existingTable2.setNbChbNoshow191(table2.getNbChbNoshow191());
                }
                if (table2.getRevenuNetChambre192() != null) {
                    existingTable2.setRevenuNetChambre192(table2.getRevenuNetChambre192());
                }
                if (table2.getRevenuTaxeChambre193() != null) {
                    existingTable2.setRevenuTaxeChambre193(table2.getRevenuTaxeChambre193());
                }
                if (table2.getRevenuNetChambreGlobal194() != null) {
                    existingTable2.setRevenuNetChambreGlobal194(table2.getRevenuNetChambreGlobal194());
                }
                if (table2.getRevenuTaxeChambreGlobal195() != null) {
                    existingTable2.setRevenuTaxeChambreGlobal195(table2.getRevenuTaxeChambreGlobal195());
                }
                if (table2.getRevenuNetBq196() != null) {
                    existingTable2.setRevenuNetBq196(table2.getRevenuNetBq196());
                }
                if (table2.getRevenuTaxeBq197() != null) {
                    existingTable2.setRevenuTaxeBq197(table2.getRevenuTaxeBq197());
                }
                if (table2.getRevenuNetBqGlobal198() != null) {
                    existingTable2.setRevenuNetBqGlobal198(table2.getRevenuNetBqGlobal198());
                }
                if (table2.getRevenuTaxeBqGlobal199() != null) {
                    existingTable2.setRevenuTaxeBqGlobal199(table2.getRevenuTaxeBqGlobal199());
                }
                if (table2.getRevenuNetExtra200() != null) {
                    existingTable2.setRevenuNetExtra200(table2.getRevenuNetExtra200());
                }
                if (table2.getRevenuTaxeExtra201() != null) {
                    existingTable2.setRevenuTaxeExtra201(table2.getRevenuTaxeExtra201());
                }
                if (table2.getRevenuNetExtraGlobal202() != null) {
                    existingTable2.setRevenuNetExtraGlobal202(table2.getRevenuNetExtraGlobal202());
                }
                if (table2.getRevenuTaxeExtraGlobal203() != null) {
                    existingTable2.setRevenuTaxeExtraGlobal203(table2.getRevenuTaxeExtraGlobal203());
                }
                if (table2.getRevenuNetTotal204() != null) {
                    existingTable2.setRevenuNetTotal204(table2.getRevenuNetTotal204());
                }
                if (table2.getRevenuTaxeTotal205() != null) {
                    existingTable2.setRevenuTaxeTotal205(table2.getRevenuTaxeTotal205());
                }
                if (table2.getRevenuNetTotalGlobal206() != null) {
                    existingTable2.setRevenuNetTotalGlobal206(table2.getRevenuNetTotalGlobal206());
                }
                if (table2.getRevenuTaxeTotalGlobal207() != null) {
                    existingTable2.setRevenuTaxeTotalGlobal207(table2.getRevenuTaxeTotalGlobal207());
                }
                if (table2.getProdRevenuChambre208() != null) {
                    existingTable2.setProdRevenuChambre208(table2.getProdRevenuChambre208());
                }
                if (table2.getProdRevenuBq209() != null) {
                    existingTable2.setProdRevenuBq209(table2.getProdRevenuBq209());
                }
                if (table2.getProdRevenuExtra210() != null) {
                    existingTable2.setProdRevenuExtra210(table2.getProdRevenuExtra210());
                }
                if (table2.getProdRevenuTotal211() != null) {
                    existingTable2.setProdRevenuTotal211(table2.getProdRevenuTotal211());
                }
                if (table2.getProdChambreNbNuitees212() != null) {
                    existingTable2.setProdChambreNbNuitees212(table2.getProdChambreNbNuitees212());
                }
                if (table2.getTechCreateDate213() != null) {
                    existingTable2.setTechCreateDate213(table2.getTechCreateDate213());
                }
                if (table2.getTechUpdateDate214() != null) {
                    existingTable2.setTechUpdateDate214(table2.getTechUpdateDate214());
                }
                if (table2.getNumLigne215() != null) {
                    existingTable2.setNumLigne215(table2.getNumLigne215());
                }
                if (table2.getResort216() != null) {
                    existingTable2.setResort216(table2.getResort216());
                }
                if (table2.getResvNameId217() != null) {
                    existingTable2.setResvNameId217(table2.getResvNameId217());
                }
                if (table2.getClientOId218() != null) {
                    existingTable2.setClientOId218(table2.getClientOId218());
                }
                if (table2.getTypeChb219() != null) {
                    existingTable2.setTypeChb219(table2.getTypeChb219());
                }
                if (table2.getConfirmationNo220() != null) {
                    existingTable2.setConfirmationNo220(table2.getConfirmationNo220());
                }
                if (table2.getClientMdmId221() != null) {
                    existingTable2.setClientMdmId221(table2.getClientMdmId221());
                }
                if (table2.getNameId222() != null) {
                    existingTable2.setNameId222(table2.getNameId222());
                }
                if (table2.getParentResvNameId223() != null) {
                    existingTable2.setParentResvNameId223(table2.getParentResvNameId223());
                }
                if (table2.getContactId224() != null) {
                    existingTable2.setContactId224(table2.getContactId224());
                }
                if (table2.getAgenceId225() != null) {
                    existingTable2.setAgenceId225(table2.getAgenceId225());
                }
                if (table2.getAgenceNom226() != null) {
                    existingTable2.setAgenceNom226(table2.getAgenceNom226());
                }
                if (table2.getSocieteId227() != null) {
                    existingTable2.setSocieteId227(table2.getSocieteId227());
                }
                if (table2.getGroupeId228() != null) {
                    existingTable2.setGroupeId228(table2.getGroupeId228());
                }
                if (table2.getNumBloc229() != null) {
                    existingTable2.setNumBloc229(table2.getNumBloc229());
                }
                if (table2.getTypeResv230() != null) {
                    existingTable2.setTypeResv230(table2.getTypeResv230());
                }
                if (table2.getStatutResv231() != null) {
                    existingTable2.setStatutResv231(table2.getStatutResv231());
                }
                if (table2.getDateDebutResv232() != null) {
                    existingTable2.setDateDebutResv232(table2.getDateDebutResv232());
                }
                if (table2.getDateFinResv233() != null) {
                    existingTable2.setDateFinResv233(table2.getDateFinResv233());
                }
                if (table2.getTruncDateDebutResv234() != null) {
                    existingTable2.setTruncDateDebutResv234(table2.getTruncDateDebutResv234());
                }
                if (table2.getTruncDateFinResv235() != null) {
                    existingTable2.setTruncDateFinResv235(table2.getTruncDateFinResv235());
                }
                if (table2.getDateAnnResv236() != null) {
                    existingTable2.setDateAnnResv236(table2.getDateAnnResv236());
                }
                if (table2.getPseudoRoomYn237() != null) {
                    existingTable2.setPseudoRoomYn237(table2.getPseudoRoomYn237());
                }
                if (table2.getCreateurResv238() != null) {
                    existingTable2.setCreateurResv238(table2.getCreateurResv238());
                }
                if (table2.getNomCreateurResv239() != null) {
                    existingTable2.setNomCreateurResv239(table2.getNomCreateurResv239());
                }
                if (table2.getCodeGarantie240() != null) {
                    existingTable2.setCodeGarantie240(table2.getCodeGarantie240());
                }
                if (table2.getFlgDed241() != null) {
                    existingTable2.setFlgDed241(table2.getFlgDed241());
                }
                if (table2.getCodePays242() != null) {
                    existingTable2.setCodePays242(table2.getCodePays242());
                }
                if (table2.getLibPays243() != null) {
                    existingTable2.setLibPays243(table2.getLibPays243());
                }
                if (table2.getCodeNationalite244() != null) {
                    existingTable2.setCodeNationalite244(table2.getCodeNationalite244());
                }
                if (table2.getLibNationalite245() != null) {
                    existingTable2.setLibNationalite245(table2.getLibNationalite245());
                }
                if (table2.getCodeSource246() != null) {
                    existingTable2.setCodeSource246(table2.getCodeSource246());
                }
                if (table2.getLibSource247() != null) {
                    existingTable2.setLibSource247(table2.getLibSource247());
                }
                if (table2.getCodeGrandSource248() != null) {
                    existingTable2.setCodeGrandSource248(table2.getCodeGrandSource248());
                }
                if (table2.getCodeOrigine249() != null) {
                    existingTable2.setCodeOrigine249(table2.getCodeOrigine249());
                }
                if (table2.getLibOrigine250() != null) {
                    existingTable2.setLibOrigine250(table2.getLibOrigine250());
                }
                if (table2.getCodeMarche251() != null) {
                    existingTable2.setCodeMarche251(table2.getCodeMarche251());
                }
                if (table2.getLibMarche252() != null) {
                    existingTable2.setLibMarche252(table2.getLibMarche252());
                }
                if (table2.getCodeGrandMarche253() != null) {
                    existingTable2.setCodeGrandMarche253(table2.getCodeGrandMarche253());
                }
                if (table2.getLibGrandMarche254() != null) {
                    existingTable2.setLibGrandMarche254(table2.getLibGrandMarche254());
                }
                if (table2.getCodePrix255() != null) {
                    existingTable2.setCodePrix255(table2.getCodePrix255());
                }
                if (table2.getCategPrix256() != null) {
                    existingTable2.setCategPrix256(table2.getCategPrix256());
                }
                if (table2.getLibPrix257() != null) {
                    existingTable2.setLibPrix257(table2.getLibPrix257());
                }
                if (table2.getNumChb258() != null) {
                    existingTable2.setNumChb258(table2.getNumChb258());
                }
                if (table2.getDescriptionTypeChb259() != null) {
                    existingTable2.setDescriptionTypeChb259(table2.getDescriptionTypeChb259());
                }
                if (table2.getCodeTypeChb260() != null) {
                    existingTable2.setCodeTypeChb260(table2.getCodeTypeChb260());
                }
                if (table2.getClassChb261() != null) {
                    existingTable2.setClassChb261(table2.getClassChb261());
                }
                if (table2.getCaractChb262() != null) {
                    existingTable2.setCaractChb262(table2.getCaractChb262());
                }
                if (table2.getTypeChbDeReservation263() != null) {
                    existingTable2.setTypeChbDeReservation263(table2.getTypeChbDeReservation263());
                }
                if (table2.getDescriptionTypeChbDeResv264() != null) {
                    existingTable2.setDescriptionTypeChbDeResv264(table2.getDescriptionTypeChbDeResv264());
                }
                if (table2.getCodeTypeChbDeResv265() != null) {
                    existingTable2.setCodeTypeChbDeResv265(table2.getCodeTypeChbDeResv265());
                }
                if (table2.getStatutDeReservation266() != null) {
                    existingTable2.setStatutDeReservation266(table2.getStatutDeReservation266());
                }
                if (table2.getCircuitDistribution267() != null) {
                    existingTable2.setCircuitDistribution267(table2.getCircuitDistribution267());
                }
                if (table2.getCircuitDistribUserRegroup268() != null) {
                    existingTable2.setCircuitDistribUserRegroup268(table2.getCircuitDistribUserRegroup268());
                }
                if (table2.getNumCrs269() != null) {
                    existingTable2.setNumCrs269(table2.getNumCrs269());
                }
                if (table2.getTypeRefCrs270() != null) {
                    existingTable2.setTypeRefCrs270(table2.getTypeRefCrs270());
                }
                if (table2.getCrsInsertDate271() != null) {
                    existingTable2.setCrsInsertDate271(table2.getCrsInsertDate271());
                }
                if (table2.getDateCreaResv272() != null) {
                    existingTable2.setDateCreaResv272(table2.getDateCreaResv272());
                }
                if (table2.getDatePremier273() != null) {
                    existingTable2.setDatePremier273(table2.getDatePremier273());
                }
                if (table2.getStatutPremier274() != null) {
                    existingTable2.setStatutPremier274(table2.getStatutPremier274());
                }
                if (table2.getDateDernier275() != null) {
                    existingTable2.setDateDernier275(table2.getDateDernier275());
                }
                if (table2.getStatutDernier276() != null) {
                    existingTable2.setStatutDernier276(table2.getStatutDernier276());
                }
                if (table2.getDateDernierPseudo277() != null) {
                    existingTable2.setDateDernierPseudo277(table2.getDateDernierPseudo277());
                }
                if (table2.getStatutDernierPseudo278() != null) {
                    existingTable2.setStatutDernierPseudo278(table2.getStatutDernierPseudo278());
                }
                if (table2.getDiffDtCreaAnn279() != null) {
                    existingTable2.setDiffDtCreaAnn279(table2.getDiffDtCreaAnn279());
                }
                if (table2.getDiffDtArrAnn280() != null) {
                    existingTable2.setDiffDtArrAnn280(table2.getDiffDtArrAnn280());
                }
                if (table2.getLeadtime281() != null) {
                    existingTable2.setLeadtime281(table2.getLeadtime281());
                }
                if (table2.getLos282() != null) {
                    existingTable2.setLos282(table2.getLos282());
                }
                if (table2.getOccupantsGroupe283() != null) {
                    existingTable2.setOccupantsGroupe283(table2.getOccupantsGroupe283());
                }
                if (table2.getNbNuitee284() != null) {
                    existingTable2.setNbNuitee284(table2.getNbNuitee284());
                }
                if (table2.getNbNuiteeNnDed285() != null) {
                    existingTable2.setNbNuiteeNnDed285(table2.getNbNuiteeNnDed285());
                }
                if (table2.getNbResvAnn286() != null) {
                    existingTable2.setNbResvAnn286(table2.getNbResvAnn286());
                }
                if (table2.getNbAdu287() != null) {
                    existingTable2.setNbAdu287(table2.getNbAdu287());
                }
                if (table2.getNbEnf288() != null) {
                    existingTable2.setNbEnf288(table2.getNbEnf288());
                }
                if (table2.getNbPersDayU289() != null) {
                    existingTable2.setNbPersDayU289(table2.getNbPersDayU289());
                }
                if (table2.getNbPersArr290() != null) {
                    existingTable2.setNbPersArr290(table2.getNbPersArr290());
                }
                if (table2.getNbPersDep291() != null) {
                    existingTable2.setNbPersDep291(table2.getNbPersDep291());
                }
                if (table2.getNbPersAnn292() != null) {
                    existingTable2.setNbPersAnn292(table2.getNbPersAnn292());
                }
                if (table2.getNbPersNoshow293() != null) {
                    existingTable2.setNbPersNoshow293(table2.getNbPersNoshow293());
                }
                if (table2.getNbChbDayU294() != null) {
                    existingTable2.setNbChbDayU294(table2.getNbChbDayU294());
                }
                if (table2.getNbChbArr295() != null) {
                    existingTable2.setNbChbArr295(table2.getNbChbArr295());
                }
                if (table2.getNbChbDep296() != null) {
                    existingTable2.setNbChbDep296(table2.getNbChbDep296());
                }
                if (table2.getNbChbAnn297() != null) {
                    existingTable2.setNbChbAnn297(table2.getNbChbAnn297());
                }
                if (table2.getNbChbNoshow298() != null) {
                    existingTable2.setNbChbNoshow298(table2.getNbChbNoshow298());
                }
                if (table2.getRevenuNetChambre299() != null) {
                    existingTable2.setRevenuNetChambre299(table2.getRevenuNetChambre299());
                }
                if (table2.getRevenuTaxeChambre300() != null) {
                    existingTable2.setRevenuTaxeChambre300(table2.getRevenuTaxeChambre300());
                }
                if (table2.getRevenuNetChambreGlobal301() != null) {
                    existingTable2.setRevenuNetChambreGlobal301(table2.getRevenuNetChambreGlobal301());
                }
                if (table2.getRevenuTaxeChambreGlobal302() != null) {
                    existingTable2.setRevenuTaxeChambreGlobal302(table2.getRevenuTaxeChambreGlobal302());
                }
                if (table2.getRevenuNetBq303() != null) {
                    existingTable2.setRevenuNetBq303(table2.getRevenuNetBq303());
                }
                if (table2.getRevenuTaxeBq304() != null) {
                    existingTable2.setRevenuTaxeBq304(table2.getRevenuTaxeBq304());
                }
                if (table2.getRevenuNetBqGlobal305() != null) {
                    existingTable2.setRevenuNetBqGlobal305(table2.getRevenuNetBqGlobal305());
                }
                if (table2.getRevenuTaxeBqGlobal306() != null) {
                    existingTable2.setRevenuTaxeBqGlobal306(table2.getRevenuTaxeBqGlobal306());
                }
                if (table2.getRevenuNetExtra307() != null) {
                    existingTable2.setRevenuNetExtra307(table2.getRevenuNetExtra307());
                }
                if (table2.getRevenuTaxeExtra308() != null) {
                    existingTable2.setRevenuTaxeExtra308(table2.getRevenuTaxeExtra308());
                }
                if (table2.getRevenuNetExtraGlobal309() != null) {
                    existingTable2.setRevenuNetExtraGlobal309(table2.getRevenuNetExtraGlobal309());
                }
                if (table2.getRevenuTaxeExtraGlobal310() != null) {
                    existingTable2.setRevenuTaxeExtraGlobal310(table2.getRevenuTaxeExtraGlobal310());
                }

                return existingTable2;
            })
            .map(table2Repository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table2.getId().toString())
        );
    }

    /**
     * {@code GET  /table-2-s} : get all the table2s.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of table2s in body.
     */
    @GetMapping("")
    public List<Table2> getAllTable2s() {
        log.debug("REST request to get all Table2s");
        return table2Repository.findAll();
    }

    /**
     * {@code GET  /table-2-s/:id} : get the "id" table2.
     *
     * @param id the id of the table2 to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the table2, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Table2> getTable2(@PathVariable("id") Long id) {
        log.debug("REST request to get Table2 : {}", id);
        Optional<Table2> table2 = table2Repository.findById(id);
        return ResponseUtil.wrapOrNotFound(table2);
    }

    /**
     * {@code DELETE  /table-2-s/:id} : delete the "id" table2.
     *
     * @param id the id of the table2 to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTable2(@PathVariable("id") Long id) {
        log.debug("REST request to delete Table2 : {}", id);
        table2Repository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
