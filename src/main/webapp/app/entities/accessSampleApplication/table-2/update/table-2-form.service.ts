import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ITable2, NewTable2 } from '../table-2.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ITable2 for edit and NewTable2FormGroupInput for create.
 */
type Table2FormGroupInput = ITable2 | PartialWithRequiredKeyOf<NewTable2>;

type Table2FormDefaults = Pick<NewTable2, 'id'>;

type Table2FormGroupContent = {
  id: FormControl<ITable2['id'] | NewTable2['id']>;
  numLigne1: FormControl<ITable2['numLigne1']>;
  resort2: FormControl<ITable2['resort2']>;
  resvNameId3: FormControl<ITable2['resvNameId3']>;
  clientOId4: FormControl<ITable2['clientOId4']>;
  typeChb5: FormControl<ITable2['typeChb5']>;
  confirmationNo6: FormControl<ITable2['confirmationNo6']>;
  clientMdmId7: FormControl<ITable2['clientMdmId7']>;
  nameId8: FormControl<ITable2['nameId8']>;
  parentResvNameId9: FormControl<ITable2['parentResvNameId9']>;
  contactId10: FormControl<ITable2['contactId10']>;
  agenceId11: FormControl<ITable2['agenceId11']>;
  agenceNom12: FormControl<ITable2['agenceNom12']>;
  societeId13: FormControl<ITable2['societeId13']>;
  groupeId14: FormControl<ITable2['groupeId14']>;
  numBloc15: FormControl<ITable2['numBloc15']>;
  typeResv16: FormControl<ITable2['typeResv16']>;
  statutResv17: FormControl<ITable2['statutResv17']>;
  dateDebutResv18: FormControl<ITable2['dateDebutResv18']>;
  dateFinResv19: FormControl<ITable2['dateFinResv19']>;
  truncDateDebutResv20: FormControl<ITable2['truncDateDebutResv20']>;
  truncDateFinResv21: FormControl<ITable2['truncDateFinResv21']>;
  dateAnnResv22: FormControl<ITable2['dateAnnResv22']>;
  pseudoRoomYn23: FormControl<ITable2['pseudoRoomYn23']>;
  createurResv24: FormControl<ITable2['createurResv24']>;
  nomCreateurResv25: FormControl<ITable2['nomCreateurResv25']>;
  codeGarantie26: FormControl<ITable2['codeGarantie26']>;
  flgDed27: FormControl<ITable2['flgDed27']>;
  codePays28: FormControl<ITable2['codePays28']>;
  libPays29: FormControl<ITable2['libPays29']>;
  codeNationalite30: FormControl<ITable2['codeNationalite30']>;
  libNationalite31: FormControl<ITable2['libNationalite31']>;
  codeSource32: FormControl<ITable2['codeSource32']>;
  libSource33: FormControl<ITable2['libSource33']>;
  codeGrandSource34: FormControl<ITable2['codeGrandSource34']>;
  codeOrigine35: FormControl<ITable2['codeOrigine35']>;
  libOrigine36: FormControl<ITable2['libOrigine36']>;
  codeMarche37: FormControl<ITable2['codeMarche37']>;
  libMarche38: FormControl<ITable2['libMarche38']>;
  codeGrandMarche39: FormControl<ITable2['codeGrandMarche39']>;
  libGrandMarche40: FormControl<ITable2['libGrandMarche40']>;
  codePrix41: FormControl<ITable2['codePrix41']>;
  categPrix42: FormControl<ITable2['categPrix42']>;
  libPrix43: FormControl<ITable2['libPrix43']>;
  numChb44: FormControl<ITable2['numChb44']>;
  descriptionTypeChb45: FormControl<ITable2['descriptionTypeChb45']>;
  codeTypeChb46: FormControl<ITable2['codeTypeChb46']>;
  classChb47: FormControl<ITable2['classChb47']>;
  caractChb48: FormControl<ITable2['caractChb48']>;
  typeChbDeReservation49: FormControl<ITable2['typeChbDeReservation49']>;
  descriptionTypeChbDeResv50: FormControl<ITable2['descriptionTypeChbDeResv50']>;
  codeTypeChbDeResv51: FormControl<ITable2['codeTypeChbDeResv51']>;
  statutDeReservation52: FormControl<ITable2['statutDeReservation52']>;
  circuitDistribution53: FormControl<ITable2['circuitDistribution53']>;
  circuitDistribUserRegroup54: FormControl<ITable2['circuitDistribUserRegroup54']>;
  numCrs55: FormControl<ITable2['numCrs55']>;
  typeRefCrs56: FormControl<ITable2['typeRefCrs56']>;
  crsInsertDate57: FormControl<ITable2['crsInsertDate57']>;
  dateCreaResv58: FormControl<ITable2['dateCreaResv58']>;
  datePremier59: FormControl<ITable2['datePremier59']>;
  statutPremier60: FormControl<ITable2['statutPremier60']>;
  dateDernier61: FormControl<ITable2['dateDernier61']>;
  statutDernier62: FormControl<ITable2['statutDernier62']>;
  dateDernierPseudo63: FormControl<ITable2['dateDernierPseudo63']>;
  statutDernierPseudo64: FormControl<ITable2['statutDernierPseudo64']>;
  diffDtCreaAnn65: FormControl<ITable2['diffDtCreaAnn65']>;
  diffDtArrAnn66: FormControl<ITable2['diffDtArrAnn66']>;
  leadtime67: FormControl<ITable2['leadtime67']>;
  los68: FormControl<ITable2['los68']>;
  occupantsGroupe69: FormControl<ITable2['occupantsGroupe69']>;
  nbNuitee70: FormControl<ITable2['nbNuitee70']>;
  nbNuiteeNnDed71: FormControl<ITable2['nbNuiteeNnDed71']>;
  nbResvAnn72: FormControl<ITable2['nbResvAnn72']>;
  nbAdu73: FormControl<ITable2['nbAdu73']>;
  nbEnf74: FormControl<ITable2['nbEnf74']>;
  nbPersDayU75: FormControl<ITable2['nbPersDayU75']>;
  nbPersArr76: FormControl<ITable2['nbPersArr76']>;
  nbPersDep77: FormControl<ITable2['nbPersDep77']>;
  nbPersAnn78: FormControl<ITable2['nbPersAnn78']>;
  nbPersNoshow79: FormControl<ITable2['nbPersNoshow79']>;
  nbChbDayU80: FormControl<ITable2['nbChbDayU80']>;
  nbChbArr81: FormControl<ITable2['nbChbArr81']>;
  nbChbDep82: FormControl<ITable2['nbChbDep82']>;
  nbChbAnn83: FormControl<ITable2['nbChbAnn83']>;
  nbChbNoshow84: FormControl<ITable2['nbChbNoshow84']>;
  revenuNetChambre85: FormControl<ITable2['revenuNetChambre85']>;
  revenuTaxeChambre86: FormControl<ITable2['revenuTaxeChambre86']>;
  revenuNetChambreGlobal87: FormControl<ITable2['revenuNetChambreGlobal87']>;
  revenuTaxeChambreGlobal88: FormControl<ITable2['revenuTaxeChambreGlobal88']>;
  revenuNetBq89: FormControl<ITable2['revenuNetBq89']>;
  revenuTaxeBq90: FormControl<ITable2['revenuTaxeBq90']>;
  revenuNetBqGlobal91: FormControl<ITable2['revenuNetBqGlobal91']>;
  revenuTaxeBqGlobal92: FormControl<ITable2['revenuTaxeBqGlobal92']>;
  revenuNetExtra93: FormControl<ITable2['revenuNetExtra93']>;
  revenuTaxeExtra94: FormControl<ITable2['revenuTaxeExtra94']>;
  revenuNetExtraGlobal95: FormControl<ITable2['revenuNetExtraGlobal95']>;
  revenuTaxeExtraGlobal96: FormControl<ITable2['revenuTaxeExtraGlobal96']>;
  revenuNetTotal97: FormControl<ITable2['revenuNetTotal97']>;
  revenuTaxeTotal98: FormControl<ITable2['revenuTaxeTotal98']>;
  revenuNetTotalGlobal99: FormControl<ITable2['revenuNetTotalGlobal99']>;
  revenuTaxeTotalGlobal100: FormControl<ITable2['revenuTaxeTotalGlobal100']>;
  prodRevenuChambre101: FormControl<ITable2['prodRevenuChambre101']>;
  prodRevenuBq102: FormControl<ITable2['prodRevenuBq102']>;
  prodRevenuExtra103: FormControl<ITable2['prodRevenuExtra103']>;
  prodRevenuTotal104: FormControl<ITable2['prodRevenuTotal104']>;
  prodChambreNbNuitees105: FormControl<ITable2['prodChambreNbNuitees105']>;
  techCreateDate106: FormControl<ITable2['techCreateDate106']>;
  techUpdateDate107: FormControl<ITable2['techUpdateDate107']>;
  numLigne108: FormControl<ITable2['numLigne108']>;
  resort109: FormControl<ITable2['resort109']>;
  resvNameId110: FormControl<ITable2['resvNameId110']>;
  clientOId111: FormControl<ITable2['clientOId111']>;
  typeChb112: FormControl<ITable2['typeChb112']>;
  confirmationNo113: FormControl<ITable2['confirmationNo113']>;
  clientMdmId114: FormControl<ITable2['clientMdmId114']>;
  nameId115: FormControl<ITable2['nameId115']>;
  parentResvNameId116: FormControl<ITable2['parentResvNameId116']>;
  contactId117: FormControl<ITable2['contactId117']>;
  agenceId118: FormControl<ITable2['agenceId118']>;
  agenceNom119: FormControl<ITable2['agenceNom119']>;
  societeId120: FormControl<ITable2['societeId120']>;
  groupeId121: FormControl<ITable2['groupeId121']>;
  numBloc122: FormControl<ITable2['numBloc122']>;
  typeResv123: FormControl<ITable2['typeResv123']>;
  statutResv124: FormControl<ITable2['statutResv124']>;
  dateDebutResv125: FormControl<ITable2['dateDebutResv125']>;
  dateFinResv126: FormControl<ITable2['dateFinResv126']>;
  truncDateDebutResv127: FormControl<ITable2['truncDateDebutResv127']>;
  truncDateFinResv128: FormControl<ITable2['truncDateFinResv128']>;
  dateAnnResv129: FormControl<ITable2['dateAnnResv129']>;
  pseudoRoomYn130: FormControl<ITable2['pseudoRoomYn130']>;
  createurResv131: FormControl<ITable2['createurResv131']>;
  nomCreateurResv132: FormControl<ITable2['nomCreateurResv132']>;
  codeGarantie133: FormControl<ITable2['codeGarantie133']>;
  flgDed134: FormControl<ITable2['flgDed134']>;
  codePays135: FormControl<ITable2['codePays135']>;
  libPays136: FormControl<ITable2['libPays136']>;
  codeNationalite137: FormControl<ITable2['codeNationalite137']>;
  libNationalite138: FormControl<ITable2['libNationalite138']>;
  codeSource139: FormControl<ITable2['codeSource139']>;
  libSource140: FormControl<ITable2['libSource140']>;
  codeGrandSource141: FormControl<ITable2['codeGrandSource141']>;
  codeOrigine142: FormControl<ITable2['codeOrigine142']>;
  libOrigine143: FormControl<ITable2['libOrigine143']>;
  codeMarche144: FormControl<ITable2['codeMarche144']>;
  libMarche145: FormControl<ITable2['libMarche145']>;
  codeGrandMarche146: FormControl<ITable2['codeGrandMarche146']>;
  libGrandMarche147: FormControl<ITable2['libGrandMarche147']>;
  codePrix148: FormControl<ITable2['codePrix148']>;
  categPrix149: FormControl<ITable2['categPrix149']>;
  libPrix150: FormControl<ITable2['libPrix150']>;
  numChb151: FormControl<ITable2['numChb151']>;
  descriptionTypeChb152: FormControl<ITable2['descriptionTypeChb152']>;
  codeTypeChb153: FormControl<ITable2['codeTypeChb153']>;
  classChb154: FormControl<ITable2['classChb154']>;
  caractChb155: FormControl<ITable2['caractChb155']>;
  typeChbDeReservation156: FormControl<ITable2['typeChbDeReservation156']>;
  descriptionTypeChbDeResv157: FormControl<ITable2['descriptionTypeChbDeResv157']>;
  codeTypeChbDeResv158: FormControl<ITable2['codeTypeChbDeResv158']>;
  statutDeReservation159: FormControl<ITable2['statutDeReservation159']>;
  circuitDistribution160: FormControl<ITable2['circuitDistribution160']>;
  circuitDistribUserRegroup161: FormControl<ITable2['circuitDistribUserRegroup161']>;
  numCrs162: FormControl<ITable2['numCrs162']>;
  typeRefCrs163: FormControl<ITable2['typeRefCrs163']>;
  crsInsertDate164: FormControl<ITable2['crsInsertDate164']>;
  dateCreaResv165: FormControl<ITable2['dateCreaResv165']>;
  datePremier166: FormControl<ITable2['datePremier166']>;
  statutPremier167: FormControl<ITable2['statutPremier167']>;
  dateDernier168: FormControl<ITable2['dateDernier168']>;
  statutDernier169: FormControl<ITable2['statutDernier169']>;
  dateDernierPseudo170: FormControl<ITable2['dateDernierPseudo170']>;
  statutDernierPseudo171: FormControl<ITable2['statutDernierPseudo171']>;
  diffDtCreaAnn172: FormControl<ITable2['diffDtCreaAnn172']>;
  diffDtArrAnn173: FormControl<ITable2['diffDtArrAnn173']>;
  leadtime174: FormControl<ITable2['leadtime174']>;
  los175: FormControl<ITable2['los175']>;
  occupantsGroupe176: FormControl<ITable2['occupantsGroupe176']>;
  nbNuitee177: FormControl<ITable2['nbNuitee177']>;
  nbNuiteeNnDed178: FormControl<ITable2['nbNuiteeNnDed178']>;
  nbResvAnn179: FormControl<ITable2['nbResvAnn179']>;
  nbAdu180: FormControl<ITable2['nbAdu180']>;
  nbEnf181: FormControl<ITable2['nbEnf181']>;
  nbPersDayU182: FormControl<ITable2['nbPersDayU182']>;
  nbPersArr183: FormControl<ITable2['nbPersArr183']>;
  nbPersDep184: FormControl<ITable2['nbPersDep184']>;
  nbPersAnn185: FormControl<ITable2['nbPersAnn185']>;
  nbPersNoshow186: FormControl<ITable2['nbPersNoshow186']>;
  nbChbDayU187: FormControl<ITable2['nbChbDayU187']>;
  nbChbArr188: FormControl<ITable2['nbChbArr188']>;
  nbChbDep189: FormControl<ITable2['nbChbDep189']>;
  nbChbAnn190: FormControl<ITable2['nbChbAnn190']>;
  nbChbNoshow191: FormControl<ITable2['nbChbNoshow191']>;
  revenuNetChambre192: FormControl<ITable2['revenuNetChambre192']>;
  revenuTaxeChambre193: FormControl<ITable2['revenuTaxeChambre193']>;
  revenuNetChambreGlobal194: FormControl<ITable2['revenuNetChambreGlobal194']>;
  revenuTaxeChambreGlobal195: FormControl<ITable2['revenuTaxeChambreGlobal195']>;
  revenuNetBq196: FormControl<ITable2['revenuNetBq196']>;
  revenuTaxeBq197: FormControl<ITable2['revenuTaxeBq197']>;
  revenuNetBqGlobal198: FormControl<ITable2['revenuNetBqGlobal198']>;
  revenuTaxeBqGlobal199: FormControl<ITable2['revenuTaxeBqGlobal199']>;
  revenuNetExtra200: FormControl<ITable2['revenuNetExtra200']>;
  revenuTaxeExtra201: FormControl<ITable2['revenuTaxeExtra201']>;
  revenuNetExtraGlobal202: FormControl<ITable2['revenuNetExtraGlobal202']>;
  revenuTaxeExtraGlobal203: FormControl<ITable2['revenuTaxeExtraGlobal203']>;
  revenuNetTotal204: FormControl<ITable2['revenuNetTotal204']>;
  revenuTaxeTotal205: FormControl<ITable2['revenuTaxeTotal205']>;
  revenuNetTotalGlobal206: FormControl<ITable2['revenuNetTotalGlobal206']>;
  revenuTaxeTotalGlobal207: FormControl<ITable2['revenuTaxeTotalGlobal207']>;
  prodRevenuChambre208: FormControl<ITable2['prodRevenuChambre208']>;
  prodRevenuBq209: FormControl<ITable2['prodRevenuBq209']>;
  prodRevenuExtra210: FormControl<ITable2['prodRevenuExtra210']>;
  prodRevenuTotal211: FormControl<ITable2['prodRevenuTotal211']>;
  prodChambreNbNuitees212: FormControl<ITable2['prodChambreNbNuitees212']>;
  techCreateDate213: FormControl<ITable2['techCreateDate213']>;
  techUpdateDate214: FormControl<ITable2['techUpdateDate214']>;
  numLigne215: FormControl<ITable2['numLigne215']>;
  resort216: FormControl<ITable2['resort216']>;
  resvNameId217: FormControl<ITable2['resvNameId217']>;
  clientOId218: FormControl<ITable2['clientOId218']>;
  typeChb219: FormControl<ITable2['typeChb219']>;
  confirmationNo220: FormControl<ITable2['confirmationNo220']>;
  clientMdmId221: FormControl<ITable2['clientMdmId221']>;
  nameId222: FormControl<ITable2['nameId222']>;
  parentResvNameId223: FormControl<ITable2['parentResvNameId223']>;
  contactId224: FormControl<ITable2['contactId224']>;
  agenceId225: FormControl<ITable2['agenceId225']>;
  agenceNom226: FormControl<ITable2['agenceNom226']>;
  societeId227: FormControl<ITable2['societeId227']>;
  groupeId228: FormControl<ITable2['groupeId228']>;
  numBloc229: FormControl<ITable2['numBloc229']>;
  typeResv230: FormControl<ITable2['typeResv230']>;
  statutResv231: FormControl<ITable2['statutResv231']>;
  dateDebutResv232: FormControl<ITable2['dateDebutResv232']>;
  dateFinResv233: FormControl<ITable2['dateFinResv233']>;
  truncDateDebutResv234: FormControl<ITable2['truncDateDebutResv234']>;
  truncDateFinResv235: FormControl<ITable2['truncDateFinResv235']>;
  dateAnnResv236: FormControl<ITable2['dateAnnResv236']>;
  pseudoRoomYn237: FormControl<ITable2['pseudoRoomYn237']>;
  createurResv238: FormControl<ITable2['createurResv238']>;
  nomCreateurResv239: FormControl<ITable2['nomCreateurResv239']>;
  codeGarantie240: FormControl<ITable2['codeGarantie240']>;
  flgDed241: FormControl<ITable2['flgDed241']>;
  codePays242: FormControl<ITable2['codePays242']>;
  libPays243: FormControl<ITable2['libPays243']>;
  codeNationalite244: FormControl<ITable2['codeNationalite244']>;
  libNationalite245: FormControl<ITable2['libNationalite245']>;
  codeSource246: FormControl<ITable2['codeSource246']>;
  libSource247: FormControl<ITable2['libSource247']>;
  codeGrandSource248: FormControl<ITable2['codeGrandSource248']>;
  codeOrigine249: FormControl<ITable2['codeOrigine249']>;
  libOrigine250: FormControl<ITable2['libOrigine250']>;
  codeMarche251: FormControl<ITable2['codeMarche251']>;
  libMarche252: FormControl<ITable2['libMarche252']>;
  codeGrandMarche253: FormControl<ITable2['codeGrandMarche253']>;
  libGrandMarche254: FormControl<ITable2['libGrandMarche254']>;
  codePrix255: FormControl<ITable2['codePrix255']>;
  categPrix256: FormControl<ITable2['categPrix256']>;
  libPrix257: FormControl<ITable2['libPrix257']>;
  numChb258: FormControl<ITable2['numChb258']>;
  descriptionTypeChb259: FormControl<ITable2['descriptionTypeChb259']>;
  codeTypeChb260: FormControl<ITable2['codeTypeChb260']>;
  classChb261: FormControl<ITable2['classChb261']>;
  caractChb262: FormControl<ITable2['caractChb262']>;
  typeChbDeReservation263: FormControl<ITable2['typeChbDeReservation263']>;
  descriptionTypeChbDeResv264: FormControl<ITable2['descriptionTypeChbDeResv264']>;
  codeTypeChbDeResv265: FormControl<ITable2['codeTypeChbDeResv265']>;
  statutDeReservation266: FormControl<ITable2['statutDeReservation266']>;
  circuitDistribution267: FormControl<ITable2['circuitDistribution267']>;
  circuitDistribUserRegroup268: FormControl<ITable2['circuitDistribUserRegroup268']>;
  numCrs269: FormControl<ITable2['numCrs269']>;
  typeRefCrs270: FormControl<ITable2['typeRefCrs270']>;
  crsInsertDate271: FormControl<ITable2['crsInsertDate271']>;
  dateCreaResv272: FormControl<ITable2['dateCreaResv272']>;
  datePremier273: FormControl<ITable2['datePremier273']>;
  statutPremier274: FormControl<ITable2['statutPremier274']>;
  dateDernier275: FormControl<ITable2['dateDernier275']>;
  statutDernier276: FormControl<ITable2['statutDernier276']>;
  dateDernierPseudo277: FormControl<ITable2['dateDernierPseudo277']>;
  statutDernierPseudo278: FormControl<ITable2['statutDernierPseudo278']>;
  diffDtCreaAnn279: FormControl<ITable2['diffDtCreaAnn279']>;
  diffDtArrAnn280: FormControl<ITable2['diffDtArrAnn280']>;
  leadtime281: FormControl<ITable2['leadtime281']>;
  los282: FormControl<ITable2['los282']>;
  occupantsGroupe283: FormControl<ITable2['occupantsGroupe283']>;
  nbNuitee284: FormControl<ITable2['nbNuitee284']>;
  nbNuiteeNnDed285: FormControl<ITable2['nbNuiteeNnDed285']>;
  nbResvAnn286: FormControl<ITable2['nbResvAnn286']>;
  nbAdu287: FormControl<ITable2['nbAdu287']>;
  nbEnf288: FormControl<ITable2['nbEnf288']>;
  nbPersDayU289: FormControl<ITable2['nbPersDayU289']>;
  nbPersArr290: FormControl<ITable2['nbPersArr290']>;
  nbPersDep291: FormControl<ITable2['nbPersDep291']>;
  nbPersAnn292: FormControl<ITable2['nbPersAnn292']>;
  nbPersNoshow293: FormControl<ITable2['nbPersNoshow293']>;
  nbChbDayU294: FormControl<ITable2['nbChbDayU294']>;
  nbChbArr295: FormControl<ITable2['nbChbArr295']>;
  nbChbDep296: FormControl<ITable2['nbChbDep296']>;
  nbChbAnn297: FormControl<ITable2['nbChbAnn297']>;
  nbChbNoshow298: FormControl<ITable2['nbChbNoshow298']>;
  revenuNetChambre299: FormControl<ITable2['revenuNetChambre299']>;
  revenuTaxeChambre300: FormControl<ITable2['revenuTaxeChambre300']>;
  revenuNetChambreGlobal301: FormControl<ITable2['revenuNetChambreGlobal301']>;
  revenuTaxeChambreGlobal302: FormControl<ITable2['revenuTaxeChambreGlobal302']>;
  revenuNetBq303: FormControl<ITable2['revenuNetBq303']>;
  revenuTaxeBq304: FormControl<ITable2['revenuTaxeBq304']>;
  revenuNetBqGlobal305: FormControl<ITable2['revenuNetBqGlobal305']>;
  revenuTaxeBqGlobal306: FormControl<ITable2['revenuTaxeBqGlobal306']>;
  revenuNetExtra307: FormControl<ITable2['revenuNetExtra307']>;
  revenuTaxeExtra308: FormControl<ITable2['revenuTaxeExtra308']>;
  revenuNetExtraGlobal309: FormControl<ITable2['revenuNetExtraGlobal309']>;
  revenuTaxeExtraGlobal310: FormControl<ITable2['revenuTaxeExtraGlobal310']>;
};

export type Table2FormGroup = FormGroup<Table2FormGroupContent>;

@Injectable({ providedIn: 'root' })
export class Table2FormService {
  createTable2FormGroup(table2: Table2FormGroupInput = { id: null }): Table2FormGroup {
    const table2RawValue = {
      ...this.getFormDefaults(),
      ...table2,
    };
    return new FormGroup<Table2FormGroupContent>({
      id: new FormControl(
        { value: table2RawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      numLigne1: new FormControl(table2RawValue.numLigne1),
      resort2: new FormControl(table2RawValue.resort2),
      resvNameId3: new FormControl(table2RawValue.resvNameId3),
      clientOId4: new FormControl(table2RawValue.clientOId4),
      typeChb5: new FormControl(table2RawValue.typeChb5),
      confirmationNo6: new FormControl(table2RawValue.confirmationNo6),
      clientMdmId7: new FormControl(table2RawValue.clientMdmId7),
      nameId8: new FormControl(table2RawValue.nameId8),
      parentResvNameId9: new FormControl(table2RawValue.parentResvNameId9),
      contactId10: new FormControl(table2RawValue.contactId10),
      agenceId11: new FormControl(table2RawValue.agenceId11),
      agenceNom12: new FormControl(table2RawValue.agenceNom12),
      societeId13: new FormControl(table2RawValue.societeId13),
      groupeId14: new FormControl(table2RawValue.groupeId14),
      numBloc15: new FormControl(table2RawValue.numBloc15),
      typeResv16: new FormControl(table2RawValue.typeResv16),
      statutResv17: new FormControl(table2RawValue.statutResv17),
      dateDebutResv18: new FormControl(table2RawValue.dateDebutResv18),
      dateFinResv19: new FormControl(table2RawValue.dateFinResv19),
      truncDateDebutResv20: new FormControl(table2RawValue.truncDateDebutResv20),
      truncDateFinResv21: new FormControl(table2RawValue.truncDateFinResv21),
      dateAnnResv22: new FormControl(table2RawValue.dateAnnResv22),
      pseudoRoomYn23: new FormControl(table2RawValue.pseudoRoomYn23),
      createurResv24: new FormControl(table2RawValue.createurResv24),
      nomCreateurResv25: new FormControl(table2RawValue.nomCreateurResv25),
      codeGarantie26: new FormControl(table2RawValue.codeGarantie26),
      flgDed27: new FormControl(table2RawValue.flgDed27),
      codePays28: new FormControl(table2RawValue.codePays28),
      libPays29: new FormControl(table2RawValue.libPays29),
      codeNationalite30: new FormControl(table2RawValue.codeNationalite30),
      libNationalite31: new FormControl(table2RawValue.libNationalite31),
      codeSource32: new FormControl(table2RawValue.codeSource32),
      libSource33: new FormControl(table2RawValue.libSource33),
      codeGrandSource34: new FormControl(table2RawValue.codeGrandSource34),
      codeOrigine35: new FormControl(table2RawValue.codeOrigine35),
      libOrigine36: new FormControl(table2RawValue.libOrigine36),
      codeMarche37: new FormControl(table2RawValue.codeMarche37),
      libMarche38: new FormControl(table2RawValue.libMarche38),
      codeGrandMarche39: new FormControl(table2RawValue.codeGrandMarche39),
      libGrandMarche40: new FormControl(table2RawValue.libGrandMarche40),
      codePrix41: new FormControl(table2RawValue.codePrix41),
      categPrix42: new FormControl(table2RawValue.categPrix42),
      libPrix43: new FormControl(table2RawValue.libPrix43),
      numChb44: new FormControl(table2RawValue.numChb44),
      descriptionTypeChb45: new FormControl(table2RawValue.descriptionTypeChb45),
      codeTypeChb46: new FormControl(table2RawValue.codeTypeChb46),
      classChb47: new FormControl(table2RawValue.classChb47),
      caractChb48: new FormControl(table2RawValue.caractChb48),
      typeChbDeReservation49: new FormControl(table2RawValue.typeChbDeReservation49),
      descriptionTypeChbDeResv50: new FormControl(table2RawValue.descriptionTypeChbDeResv50),
      codeTypeChbDeResv51: new FormControl(table2RawValue.codeTypeChbDeResv51),
      statutDeReservation52: new FormControl(table2RawValue.statutDeReservation52),
      circuitDistribution53: new FormControl(table2RawValue.circuitDistribution53),
      circuitDistribUserRegroup54: new FormControl(table2RawValue.circuitDistribUserRegroup54),
      numCrs55: new FormControl(table2RawValue.numCrs55),
      typeRefCrs56: new FormControl(table2RawValue.typeRefCrs56),
      crsInsertDate57: new FormControl(table2RawValue.crsInsertDate57),
      dateCreaResv58: new FormControl(table2RawValue.dateCreaResv58),
      datePremier59: new FormControl(table2RawValue.datePremier59),
      statutPremier60: new FormControl(table2RawValue.statutPremier60),
      dateDernier61: new FormControl(table2RawValue.dateDernier61),
      statutDernier62: new FormControl(table2RawValue.statutDernier62),
      dateDernierPseudo63: new FormControl(table2RawValue.dateDernierPseudo63),
      statutDernierPseudo64: new FormControl(table2RawValue.statutDernierPseudo64),
      diffDtCreaAnn65: new FormControl(table2RawValue.diffDtCreaAnn65),
      diffDtArrAnn66: new FormControl(table2RawValue.diffDtArrAnn66),
      leadtime67: new FormControl(table2RawValue.leadtime67),
      los68: new FormControl(table2RawValue.los68),
      occupantsGroupe69: new FormControl(table2RawValue.occupantsGroupe69),
      nbNuitee70: new FormControl(table2RawValue.nbNuitee70),
      nbNuiteeNnDed71: new FormControl(table2RawValue.nbNuiteeNnDed71),
      nbResvAnn72: new FormControl(table2RawValue.nbResvAnn72),
      nbAdu73: new FormControl(table2RawValue.nbAdu73),
      nbEnf74: new FormControl(table2RawValue.nbEnf74),
      nbPersDayU75: new FormControl(table2RawValue.nbPersDayU75),
      nbPersArr76: new FormControl(table2RawValue.nbPersArr76),
      nbPersDep77: new FormControl(table2RawValue.nbPersDep77),
      nbPersAnn78: new FormControl(table2RawValue.nbPersAnn78),
      nbPersNoshow79: new FormControl(table2RawValue.nbPersNoshow79),
      nbChbDayU80: new FormControl(table2RawValue.nbChbDayU80),
      nbChbArr81: new FormControl(table2RawValue.nbChbArr81),
      nbChbDep82: new FormControl(table2RawValue.nbChbDep82),
      nbChbAnn83: new FormControl(table2RawValue.nbChbAnn83),
      nbChbNoshow84: new FormControl(table2RawValue.nbChbNoshow84),
      revenuNetChambre85: new FormControl(table2RawValue.revenuNetChambre85),
      revenuTaxeChambre86: new FormControl(table2RawValue.revenuTaxeChambre86),
      revenuNetChambreGlobal87: new FormControl(table2RawValue.revenuNetChambreGlobal87),
      revenuTaxeChambreGlobal88: new FormControl(table2RawValue.revenuTaxeChambreGlobal88),
      revenuNetBq89: new FormControl(table2RawValue.revenuNetBq89),
      revenuTaxeBq90: new FormControl(table2RawValue.revenuTaxeBq90),
      revenuNetBqGlobal91: new FormControl(table2RawValue.revenuNetBqGlobal91),
      revenuTaxeBqGlobal92: new FormControl(table2RawValue.revenuTaxeBqGlobal92),
      revenuNetExtra93: new FormControl(table2RawValue.revenuNetExtra93),
      revenuTaxeExtra94: new FormControl(table2RawValue.revenuTaxeExtra94),
      revenuNetExtraGlobal95: new FormControl(table2RawValue.revenuNetExtraGlobal95),
      revenuTaxeExtraGlobal96: new FormControl(table2RawValue.revenuTaxeExtraGlobal96),
      revenuNetTotal97: new FormControl(table2RawValue.revenuNetTotal97),
      revenuTaxeTotal98: new FormControl(table2RawValue.revenuTaxeTotal98),
      revenuNetTotalGlobal99: new FormControl(table2RawValue.revenuNetTotalGlobal99),
      revenuTaxeTotalGlobal100: new FormControl(table2RawValue.revenuTaxeTotalGlobal100),
      prodRevenuChambre101: new FormControl(table2RawValue.prodRevenuChambre101),
      prodRevenuBq102: new FormControl(table2RawValue.prodRevenuBq102),
      prodRevenuExtra103: new FormControl(table2RawValue.prodRevenuExtra103),
      prodRevenuTotal104: new FormControl(table2RawValue.prodRevenuTotal104),
      prodChambreNbNuitees105: new FormControl(table2RawValue.prodChambreNbNuitees105),
      techCreateDate106: new FormControl(table2RawValue.techCreateDate106),
      techUpdateDate107: new FormControl(table2RawValue.techUpdateDate107),
      numLigne108: new FormControl(table2RawValue.numLigne108),
      resort109: new FormControl(table2RawValue.resort109),
      resvNameId110: new FormControl(table2RawValue.resvNameId110),
      clientOId111: new FormControl(table2RawValue.clientOId111),
      typeChb112: new FormControl(table2RawValue.typeChb112),
      confirmationNo113: new FormControl(table2RawValue.confirmationNo113),
      clientMdmId114: new FormControl(table2RawValue.clientMdmId114),
      nameId115: new FormControl(table2RawValue.nameId115),
      parentResvNameId116: new FormControl(table2RawValue.parentResvNameId116),
      contactId117: new FormControl(table2RawValue.contactId117),
      agenceId118: new FormControl(table2RawValue.agenceId118),
      agenceNom119: new FormControl(table2RawValue.agenceNom119),
      societeId120: new FormControl(table2RawValue.societeId120),
      groupeId121: new FormControl(table2RawValue.groupeId121),
      numBloc122: new FormControl(table2RawValue.numBloc122),
      typeResv123: new FormControl(table2RawValue.typeResv123),
      statutResv124: new FormControl(table2RawValue.statutResv124),
      dateDebutResv125: new FormControl(table2RawValue.dateDebutResv125),
      dateFinResv126: new FormControl(table2RawValue.dateFinResv126),
      truncDateDebutResv127: new FormControl(table2RawValue.truncDateDebutResv127),
      truncDateFinResv128: new FormControl(table2RawValue.truncDateFinResv128),
      dateAnnResv129: new FormControl(table2RawValue.dateAnnResv129),
      pseudoRoomYn130: new FormControl(table2RawValue.pseudoRoomYn130),
      createurResv131: new FormControl(table2RawValue.createurResv131),
      nomCreateurResv132: new FormControl(table2RawValue.nomCreateurResv132),
      codeGarantie133: new FormControl(table2RawValue.codeGarantie133),
      flgDed134: new FormControl(table2RawValue.flgDed134),
      codePays135: new FormControl(table2RawValue.codePays135),
      libPays136: new FormControl(table2RawValue.libPays136),
      codeNationalite137: new FormControl(table2RawValue.codeNationalite137),
      libNationalite138: new FormControl(table2RawValue.libNationalite138),
      codeSource139: new FormControl(table2RawValue.codeSource139),
      libSource140: new FormControl(table2RawValue.libSource140),
      codeGrandSource141: new FormControl(table2RawValue.codeGrandSource141),
      codeOrigine142: new FormControl(table2RawValue.codeOrigine142),
      libOrigine143: new FormControl(table2RawValue.libOrigine143),
      codeMarche144: new FormControl(table2RawValue.codeMarche144),
      libMarche145: new FormControl(table2RawValue.libMarche145),
      codeGrandMarche146: new FormControl(table2RawValue.codeGrandMarche146),
      libGrandMarche147: new FormControl(table2RawValue.libGrandMarche147),
      codePrix148: new FormControl(table2RawValue.codePrix148),
      categPrix149: new FormControl(table2RawValue.categPrix149),
      libPrix150: new FormControl(table2RawValue.libPrix150),
      numChb151: new FormControl(table2RawValue.numChb151),
      descriptionTypeChb152: new FormControl(table2RawValue.descriptionTypeChb152),
      codeTypeChb153: new FormControl(table2RawValue.codeTypeChb153),
      classChb154: new FormControl(table2RawValue.classChb154),
      caractChb155: new FormControl(table2RawValue.caractChb155),
      typeChbDeReservation156: new FormControl(table2RawValue.typeChbDeReservation156),
      descriptionTypeChbDeResv157: new FormControl(table2RawValue.descriptionTypeChbDeResv157),
      codeTypeChbDeResv158: new FormControl(table2RawValue.codeTypeChbDeResv158),
      statutDeReservation159: new FormControl(table2RawValue.statutDeReservation159),
      circuitDistribution160: new FormControl(table2RawValue.circuitDistribution160),
      circuitDistribUserRegroup161: new FormControl(table2RawValue.circuitDistribUserRegroup161),
      numCrs162: new FormControl(table2RawValue.numCrs162),
      typeRefCrs163: new FormControl(table2RawValue.typeRefCrs163),
      crsInsertDate164: new FormControl(table2RawValue.crsInsertDate164),
      dateCreaResv165: new FormControl(table2RawValue.dateCreaResv165),
      datePremier166: new FormControl(table2RawValue.datePremier166),
      statutPremier167: new FormControl(table2RawValue.statutPremier167),
      dateDernier168: new FormControl(table2RawValue.dateDernier168),
      statutDernier169: new FormControl(table2RawValue.statutDernier169),
      dateDernierPseudo170: new FormControl(table2RawValue.dateDernierPseudo170),
      statutDernierPseudo171: new FormControl(table2RawValue.statutDernierPseudo171),
      diffDtCreaAnn172: new FormControl(table2RawValue.diffDtCreaAnn172),
      diffDtArrAnn173: new FormControl(table2RawValue.diffDtArrAnn173),
      leadtime174: new FormControl(table2RawValue.leadtime174),
      los175: new FormControl(table2RawValue.los175),
      occupantsGroupe176: new FormControl(table2RawValue.occupantsGroupe176),
      nbNuitee177: new FormControl(table2RawValue.nbNuitee177),
      nbNuiteeNnDed178: new FormControl(table2RawValue.nbNuiteeNnDed178),
      nbResvAnn179: new FormControl(table2RawValue.nbResvAnn179),
      nbAdu180: new FormControl(table2RawValue.nbAdu180),
      nbEnf181: new FormControl(table2RawValue.nbEnf181),
      nbPersDayU182: new FormControl(table2RawValue.nbPersDayU182),
      nbPersArr183: new FormControl(table2RawValue.nbPersArr183),
      nbPersDep184: new FormControl(table2RawValue.nbPersDep184),
      nbPersAnn185: new FormControl(table2RawValue.nbPersAnn185),
      nbPersNoshow186: new FormControl(table2RawValue.nbPersNoshow186),
      nbChbDayU187: new FormControl(table2RawValue.nbChbDayU187),
      nbChbArr188: new FormControl(table2RawValue.nbChbArr188),
      nbChbDep189: new FormControl(table2RawValue.nbChbDep189),
      nbChbAnn190: new FormControl(table2RawValue.nbChbAnn190),
      nbChbNoshow191: new FormControl(table2RawValue.nbChbNoshow191),
      revenuNetChambre192: new FormControl(table2RawValue.revenuNetChambre192),
      revenuTaxeChambre193: new FormControl(table2RawValue.revenuTaxeChambre193),
      revenuNetChambreGlobal194: new FormControl(table2RawValue.revenuNetChambreGlobal194),
      revenuTaxeChambreGlobal195: new FormControl(table2RawValue.revenuTaxeChambreGlobal195),
      revenuNetBq196: new FormControl(table2RawValue.revenuNetBq196),
      revenuTaxeBq197: new FormControl(table2RawValue.revenuTaxeBq197),
      revenuNetBqGlobal198: new FormControl(table2RawValue.revenuNetBqGlobal198),
      revenuTaxeBqGlobal199: new FormControl(table2RawValue.revenuTaxeBqGlobal199),
      revenuNetExtra200: new FormControl(table2RawValue.revenuNetExtra200),
      revenuTaxeExtra201: new FormControl(table2RawValue.revenuTaxeExtra201),
      revenuNetExtraGlobal202: new FormControl(table2RawValue.revenuNetExtraGlobal202),
      revenuTaxeExtraGlobal203: new FormControl(table2RawValue.revenuTaxeExtraGlobal203),
      revenuNetTotal204: new FormControl(table2RawValue.revenuNetTotal204),
      revenuTaxeTotal205: new FormControl(table2RawValue.revenuTaxeTotal205),
      revenuNetTotalGlobal206: new FormControl(table2RawValue.revenuNetTotalGlobal206),
      revenuTaxeTotalGlobal207: new FormControl(table2RawValue.revenuTaxeTotalGlobal207),
      prodRevenuChambre208: new FormControl(table2RawValue.prodRevenuChambre208),
      prodRevenuBq209: new FormControl(table2RawValue.prodRevenuBq209),
      prodRevenuExtra210: new FormControl(table2RawValue.prodRevenuExtra210),
      prodRevenuTotal211: new FormControl(table2RawValue.prodRevenuTotal211),
      prodChambreNbNuitees212: new FormControl(table2RawValue.prodChambreNbNuitees212),
      techCreateDate213: new FormControl(table2RawValue.techCreateDate213),
      techUpdateDate214: new FormControl(table2RawValue.techUpdateDate214),
      numLigne215: new FormControl(table2RawValue.numLigne215),
      resort216: new FormControl(table2RawValue.resort216),
      resvNameId217: new FormControl(table2RawValue.resvNameId217),
      clientOId218: new FormControl(table2RawValue.clientOId218),
      typeChb219: new FormControl(table2RawValue.typeChb219),
      confirmationNo220: new FormControl(table2RawValue.confirmationNo220),
      clientMdmId221: new FormControl(table2RawValue.clientMdmId221),
      nameId222: new FormControl(table2RawValue.nameId222),
      parentResvNameId223: new FormControl(table2RawValue.parentResvNameId223),
      contactId224: new FormControl(table2RawValue.contactId224),
      agenceId225: new FormControl(table2RawValue.agenceId225),
      agenceNom226: new FormControl(table2RawValue.agenceNom226),
      societeId227: new FormControl(table2RawValue.societeId227),
      groupeId228: new FormControl(table2RawValue.groupeId228),
      numBloc229: new FormControl(table2RawValue.numBloc229),
      typeResv230: new FormControl(table2RawValue.typeResv230),
      statutResv231: new FormControl(table2RawValue.statutResv231),
      dateDebutResv232: new FormControl(table2RawValue.dateDebutResv232),
      dateFinResv233: new FormControl(table2RawValue.dateFinResv233),
      truncDateDebutResv234: new FormControl(table2RawValue.truncDateDebutResv234),
      truncDateFinResv235: new FormControl(table2RawValue.truncDateFinResv235),
      dateAnnResv236: new FormControl(table2RawValue.dateAnnResv236),
      pseudoRoomYn237: new FormControl(table2RawValue.pseudoRoomYn237),
      createurResv238: new FormControl(table2RawValue.createurResv238),
      nomCreateurResv239: new FormControl(table2RawValue.nomCreateurResv239),
      codeGarantie240: new FormControl(table2RawValue.codeGarantie240),
      flgDed241: new FormControl(table2RawValue.flgDed241),
      codePays242: new FormControl(table2RawValue.codePays242),
      libPays243: new FormControl(table2RawValue.libPays243),
      codeNationalite244: new FormControl(table2RawValue.codeNationalite244),
      libNationalite245: new FormControl(table2RawValue.libNationalite245),
      codeSource246: new FormControl(table2RawValue.codeSource246),
      libSource247: new FormControl(table2RawValue.libSource247),
      codeGrandSource248: new FormControl(table2RawValue.codeGrandSource248),
      codeOrigine249: new FormControl(table2RawValue.codeOrigine249),
      libOrigine250: new FormControl(table2RawValue.libOrigine250),
      codeMarche251: new FormControl(table2RawValue.codeMarche251),
      libMarche252: new FormControl(table2RawValue.libMarche252),
      codeGrandMarche253: new FormControl(table2RawValue.codeGrandMarche253),
      libGrandMarche254: new FormControl(table2RawValue.libGrandMarche254),
      codePrix255: new FormControl(table2RawValue.codePrix255),
      categPrix256: new FormControl(table2RawValue.categPrix256),
      libPrix257: new FormControl(table2RawValue.libPrix257),
      numChb258: new FormControl(table2RawValue.numChb258),
      descriptionTypeChb259: new FormControl(table2RawValue.descriptionTypeChb259),
      codeTypeChb260: new FormControl(table2RawValue.codeTypeChb260),
      classChb261: new FormControl(table2RawValue.classChb261),
      caractChb262: new FormControl(table2RawValue.caractChb262),
      typeChbDeReservation263: new FormControl(table2RawValue.typeChbDeReservation263),
      descriptionTypeChbDeResv264: new FormControl(table2RawValue.descriptionTypeChbDeResv264),
      codeTypeChbDeResv265: new FormControl(table2RawValue.codeTypeChbDeResv265),
      statutDeReservation266: new FormControl(table2RawValue.statutDeReservation266),
      circuitDistribution267: new FormControl(table2RawValue.circuitDistribution267),
      circuitDistribUserRegroup268: new FormControl(table2RawValue.circuitDistribUserRegroup268),
      numCrs269: new FormControl(table2RawValue.numCrs269),
      typeRefCrs270: new FormControl(table2RawValue.typeRefCrs270),
      crsInsertDate271: new FormControl(table2RawValue.crsInsertDate271),
      dateCreaResv272: new FormControl(table2RawValue.dateCreaResv272),
      datePremier273: new FormControl(table2RawValue.datePremier273),
      statutPremier274: new FormControl(table2RawValue.statutPremier274),
      dateDernier275: new FormControl(table2RawValue.dateDernier275),
      statutDernier276: new FormControl(table2RawValue.statutDernier276),
      dateDernierPseudo277: new FormControl(table2RawValue.dateDernierPseudo277),
      statutDernierPseudo278: new FormControl(table2RawValue.statutDernierPseudo278),
      diffDtCreaAnn279: new FormControl(table2RawValue.diffDtCreaAnn279),
      diffDtArrAnn280: new FormControl(table2RawValue.diffDtArrAnn280),
      leadtime281: new FormControl(table2RawValue.leadtime281),
      los282: new FormControl(table2RawValue.los282),
      occupantsGroupe283: new FormControl(table2RawValue.occupantsGroupe283),
      nbNuitee284: new FormControl(table2RawValue.nbNuitee284),
      nbNuiteeNnDed285: new FormControl(table2RawValue.nbNuiteeNnDed285),
      nbResvAnn286: new FormControl(table2RawValue.nbResvAnn286),
      nbAdu287: new FormControl(table2RawValue.nbAdu287),
      nbEnf288: new FormControl(table2RawValue.nbEnf288),
      nbPersDayU289: new FormControl(table2RawValue.nbPersDayU289),
      nbPersArr290: new FormControl(table2RawValue.nbPersArr290),
      nbPersDep291: new FormControl(table2RawValue.nbPersDep291),
      nbPersAnn292: new FormControl(table2RawValue.nbPersAnn292),
      nbPersNoshow293: new FormControl(table2RawValue.nbPersNoshow293),
      nbChbDayU294: new FormControl(table2RawValue.nbChbDayU294),
      nbChbArr295: new FormControl(table2RawValue.nbChbArr295),
      nbChbDep296: new FormControl(table2RawValue.nbChbDep296),
      nbChbAnn297: new FormControl(table2RawValue.nbChbAnn297),
      nbChbNoshow298: new FormControl(table2RawValue.nbChbNoshow298),
      revenuNetChambre299: new FormControl(table2RawValue.revenuNetChambre299),
      revenuTaxeChambre300: new FormControl(table2RawValue.revenuTaxeChambre300),
      revenuNetChambreGlobal301: new FormControl(table2RawValue.revenuNetChambreGlobal301),
      revenuTaxeChambreGlobal302: new FormControl(table2RawValue.revenuTaxeChambreGlobal302),
      revenuNetBq303: new FormControl(table2RawValue.revenuNetBq303),
      revenuTaxeBq304: new FormControl(table2RawValue.revenuTaxeBq304),
      revenuNetBqGlobal305: new FormControl(table2RawValue.revenuNetBqGlobal305),
      revenuTaxeBqGlobal306: new FormControl(table2RawValue.revenuTaxeBqGlobal306),
      revenuNetExtra307: new FormControl(table2RawValue.revenuNetExtra307),
      revenuTaxeExtra308: new FormControl(table2RawValue.revenuTaxeExtra308),
      revenuNetExtraGlobal309: new FormControl(table2RawValue.revenuNetExtraGlobal309),
      revenuTaxeExtraGlobal310: new FormControl(table2RawValue.revenuTaxeExtraGlobal310),
    });
  }

  getTable2(form: Table2FormGroup): ITable2 | NewTable2 {
    return form.getRawValue() as ITable2 | NewTable2;
  }

  resetForm(form: Table2FormGroup, table2: Table2FormGroupInput): void {
    const table2RawValue = { ...this.getFormDefaults(), ...table2 };
    form.reset(
      {
        ...table2RawValue,
        id: { value: table2RawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): Table2FormDefaults {
    return {
      id: null,
    };
  }
}
