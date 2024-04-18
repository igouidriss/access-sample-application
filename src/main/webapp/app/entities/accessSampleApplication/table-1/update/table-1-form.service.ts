import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ITable1, NewTable1 } from '../table-1.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ITable1 for edit and NewTable1FormGroupInput for create.
 */
type Table1FormGroupInput = ITable1 | PartialWithRequiredKeyOf<NewTable1>;

type Table1FormDefaults = Pick<NewTable1, 'id'>;

type Table1FormGroupContent = {
  id: FormControl<ITable1['id'] | NewTable1['id']>;
  numLigne1: FormControl<ITable1['numLigne1']>;
  resort2: FormControl<ITable1['resort2']>;
  resvNameId3: FormControl<ITable1['resvNameId3']>;
  clientOId4: FormControl<ITable1['clientOId4']>;
  typeChb5: FormControl<ITable1['typeChb5']>;
  confirmationNo6: FormControl<ITable1['confirmationNo6']>;
  clientMdmId7: FormControl<ITable1['clientMdmId7']>;
  nameId8: FormControl<ITable1['nameId8']>;
  parentResvNameId9: FormControl<ITable1['parentResvNameId9']>;
  contactId10: FormControl<ITable1['contactId10']>;
  agenceId11: FormControl<ITable1['agenceId11']>;
  agenceNom12: FormControl<ITable1['agenceNom12']>;
  societeId13: FormControl<ITable1['societeId13']>;
  groupeId14: FormControl<ITable1['groupeId14']>;
  numBloc15: FormControl<ITable1['numBloc15']>;
  typeResv16: FormControl<ITable1['typeResv16']>;
  statutResv17: FormControl<ITable1['statutResv17']>;
  dateDebutResv18: FormControl<ITable1['dateDebutResv18']>;
  dateFinResv19: FormControl<ITable1['dateFinResv19']>;
  truncDateDebutResv20: FormControl<ITable1['truncDateDebutResv20']>;
  truncDateFinResv21: FormControl<ITable1['truncDateFinResv21']>;
  dateAnnResv22: FormControl<ITable1['dateAnnResv22']>;
  pseudoRoomYn23: FormControl<ITable1['pseudoRoomYn23']>;
  createurResv24: FormControl<ITable1['createurResv24']>;
  nomCreateurResv25: FormControl<ITable1['nomCreateurResv25']>;
  codeGarantie26: FormControl<ITable1['codeGarantie26']>;
  flgDed27: FormControl<ITable1['flgDed27']>;
  codePays28: FormControl<ITable1['codePays28']>;
  libPays29: FormControl<ITable1['libPays29']>;
  codeNationalite30: FormControl<ITable1['codeNationalite30']>;
  libNationalite31: FormControl<ITable1['libNationalite31']>;
  codeSource32: FormControl<ITable1['codeSource32']>;
  libSource33: FormControl<ITable1['libSource33']>;
  codeGrandSource34: FormControl<ITable1['codeGrandSource34']>;
  codeOrigine35: FormControl<ITable1['codeOrigine35']>;
  libOrigine36: FormControl<ITable1['libOrigine36']>;
  codeMarche37: FormControl<ITable1['codeMarche37']>;
  libMarche38: FormControl<ITable1['libMarche38']>;
  codeGrandMarche39: FormControl<ITable1['codeGrandMarche39']>;
  libGrandMarche40: FormControl<ITable1['libGrandMarche40']>;
  codePrix41: FormControl<ITable1['codePrix41']>;
  categPrix42: FormControl<ITable1['categPrix42']>;
  libPrix43: FormControl<ITable1['libPrix43']>;
  numChb44: FormControl<ITable1['numChb44']>;
  descriptionTypeChb45: FormControl<ITable1['descriptionTypeChb45']>;
  codeTypeChb46: FormControl<ITable1['codeTypeChb46']>;
  classChb47: FormControl<ITable1['classChb47']>;
  caractChb48: FormControl<ITable1['caractChb48']>;
  typeChbDeReservation49: FormControl<ITable1['typeChbDeReservation49']>;
  descriptionTypeChbDeResv50: FormControl<ITable1['descriptionTypeChbDeResv50']>;
  codeTypeChbDeResv51: FormControl<ITable1['codeTypeChbDeResv51']>;
  statutDeReservation52: FormControl<ITable1['statutDeReservation52']>;
  circuitDistribution53: FormControl<ITable1['circuitDistribution53']>;
  circuitDistribUserRegroup54: FormControl<ITable1['circuitDistribUserRegroup54']>;
  numCrs55: FormControl<ITable1['numCrs55']>;
  typeRefCrs56: FormControl<ITable1['typeRefCrs56']>;
  crsInsertDate57: FormControl<ITable1['crsInsertDate57']>;
  dateCreaResv58: FormControl<ITable1['dateCreaResv58']>;
  datePremier59: FormControl<ITable1['datePremier59']>;
  statutPremier60: FormControl<ITable1['statutPremier60']>;
  dateDernier61: FormControl<ITable1['dateDernier61']>;
  statutDernier62: FormControl<ITable1['statutDernier62']>;
  dateDernierPseudo63: FormControl<ITable1['dateDernierPseudo63']>;
  statutDernierPseudo64: FormControl<ITable1['statutDernierPseudo64']>;
  diffDtCreaAnn65: FormControl<ITable1['diffDtCreaAnn65']>;
  diffDtArrAnn66: FormControl<ITable1['diffDtArrAnn66']>;
  leadtime67: FormControl<ITable1['leadtime67']>;
  los68: FormControl<ITable1['los68']>;
  occupantsGroupe69: FormControl<ITable1['occupantsGroupe69']>;
  nbNuitee70: FormControl<ITable1['nbNuitee70']>;
  nbNuiteeNnDed71: FormControl<ITable1['nbNuiteeNnDed71']>;
  nbResvAnn72: FormControl<ITable1['nbResvAnn72']>;
  nbAdu73: FormControl<ITable1['nbAdu73']>;
  nbEnf74: FormControl<ITable1['nbEnf74']>;
  nbPersDayU75: FormControl<ITable1['nbPersDayU75']>;
  nbPersArr76: FormControl<ITable1['nbPersArr76']>;
  nbPersDep77: FormControl<ITable1['nbPersDep77']>;
  nbPersAnn78: FormControl<ITable1['nbPersAnn78']>;
  nbPersNoshow79: FormControl<ITable1['nbPersNoshow79']>;
  nbChbDayU80: FormControl<ITable1['nbChbDayU80']>;
  nbChbArr81: FormControl<ITable1['nbChbArr81']>;
  nbChbDep82: FormControl<ITable1['nbChbDep82']>;
  nbChbAnn83: FormControl<ITable1['nbChbAnn83']>;
  nbChbNoshow84: FormControl<ITable1['nbChbNoshow84']>;
  revenuNetChambre85: FormControl<ITable1['revenuNetChambre85']>;
  revenuTaxeChambre86: FormControl<ITable1['revenuTaxeChambre86']>;
  revenuNetChambreGlobal87: FormControl<ITable1['revenuNetChambreGlobal87']>;
  revenuTaxeChambreGlobal88: FormControl<ITable1['revenuTaxeChambreGlobal88']>;
  revenuNetBq89: FormControl<ITable1['revenuNetBq89']>;
  revenuTaxeBq90: FormControl<ITable1['revenuTaxeBq90']>;
  revenuNetBqGlobal91: FormControl<ITable1['revenuNetBqGlobal91']>;
  revenuTaxeBqGlobal92: FormControl<ITable1['revenuTaxeBqGlobal92']>;
  revenuNetExtra93: FormControl<ITable1['revenuNetExtra93']>;
  revenuTaxeExtra94: FormControl<ITable1['revenuTaxeExtra94']>;
  revenuNetExtraGlobal95: FormControl<ITable1['revenuNetExtraGlobal95']>;
  revenuTaxeExtraGlobal96: FormControl<ITable1['revenuTaxeExtraGlobal96']>;
  revenuNetTotal97: FormControl<ITable1['revenuNetTotal97']>;
  revenuTaxeTotal98: FormControl<ITable1['revenuTaxeTotal98']>;
  revenuNetTotalGlobal99: FormControl<ITable1['revenuNetTotalGlobal99']>;
  revenuTaxeTotalGlobal100: FormControl<ITable1['revenuTaxeTotalGlobal100']>;
  prodRevenuChambre101: FormControl<ITable1['prodRevenuChambre101']>;
  prodRevenuBq102: FormControl<ITable1['prodRevenuBq102']>;
  prodRevenuExtra103: FormControl<ITable1['prodRevenuExtra103']>;
  prodRevenuTotal104: FormControl<ITable1['prodRevenuTotal104']>;
  prodChambreNbNuitees105: FormControl<ITable1['prodChambreNbNuitees105']>;
  techCreateDate106: FormControl<ITable1['techCreateDate106']>;
  techUpdateDate107: FormControl<ITable1['techUpdateDate107']>;
  numLigne108: FormControl<ITable1['numLigne108']>;
  resort109: FormControl<ITable1['resort109']>;
  resvNameId110: FormControl<ITable1['resvNameId110']>;
  clientOId111: FormControl<ITable1['clientOId111']>;
  typeChb112: FormControl<ITable1['typeChb112']>;
  confirmationNo113: FormControl<ITable1['confirmationNo113']>;
  clientMdmId114: FormControl<ITable1['clientMdmId114']>;
  nameId115: FormControl<ITable1['nameId115']>;
  parentResvNameId116: FormControl<ITable1['parentResvNameId116']>;
  contactId117: FormControl<ITable1['contactId117']>;
  agenceId118: FormControl<ITable1['agenceId118']>;
  agenceNom119: FormControl<ITable1['agenceNom119']>;
  societeId120: FormControl<ITable1['societeId120']>;
  groupeId121: FormControl<ITable1['groupeId121']>;
  numBloc122: FormControl<ITable1['numBloc122']>;
  typeResv123: FormControl<ITable1['typeResv123']>;
  statutResv124: FormControl<ITable1['statutResv124']>;
  dateDebutResv125: FormControl<ITable1['dateDebutResv125']>;
  dateFinResv126: FormControl<ITable1['dateFinResv126']>;
  truncDateDebutResv127: FormControl<ITable1['truncDateDebutResv127']>;
  truncDateFinResv128: FormControl<ITable1['truncDateFinResv128']>;
  dateAnnResv129: FormControl<ITable1['dateAnnResv129']>;
  pseudoRoomYn130: FormControl<ITable1['pseudoRoomYn130']>;
  createurResv131: FormControl<ITable1['createurResv131']>;
  nomCreateurResv132: FormControl<ITable1['nomCreateurResv132']>;
  codeGarantie133: FormControl<ITable1['codeGarantie133']>;
  flgDed134: FormControl<ITable1['flgDed134']>;
  codePays135: FormControl<ITable1['codePays135']>;
  libPays136: FormControl<ITable1['libPays136']>;
  codeNationalite137: FormControl<ITable1['codeNationalite137']>;
  libNationalite138: FormControl<ITable1['libNationalite138']>;
  codeSource139: FormControl<ITable1['codeSource139']>;
  libSource140: FormControl<ITable1['libSource140']>;
  codeGrandSource141: FormControl<ITable1['codeGrandSource141']>;
  codeOrigine142: FormControl<ITable1['codeOrigine142']>;
  libOrigine143: FormControl<ITable1['libOrigine143']>;
  codeMarche144: FormControl<ITable1['codeMarche144']>;
  libMarche145: FormControl<ITable1['libMarche145']>;
  codeGrandMarche146: FormControl<ITable1['codeGrandMarche146']>;
  libGrandMarche147: FormControl<ITable1['libGrandMarche147']>;
  codePrix148: FormControl<ITable1['codePrix148']>;
  categPrix149: FormControl<ITable1['categPrix149']>;
  libPrix150: FormControl<ITable1['libPrix150']>;
  numChb151: FormControl<ITable1['numChb151']>;
  descriptionTypeChb152: FormControl<ITable1['descriptionTypeChb152']>;
  codeTypeChb153: FormControl<ITable1['codeTypeChb153']>;
  classChb154: FormControl<ITable1['classChb154']>;
  caractChb155: FormControl<ITable1['caractChb155']>;
  typeChbDeReservation156: FormControl<ITable1['typeChbDeReservation156']>;
  descriptionTypeChbDeResv157: FormControl<ITable1['descriptionTypeChbDeResv157']>;
  codeTypeChbDeResv158: FormControl<ITable1['codeTypeChbDeResv158']>;
  statutDeReservation159: FormControl<ITable1['statutDeReservation159']>;
  circuitDistribution160: FormControl<ITable1['circuitDistribution160']>;
  circuitDistribUserRegroup161: FormControl<ITable1['circuitDistribUserRegroup161']>;
  numCrs162: FormControl<ITable1['numCrs162']>;
  typeRefCrs163: FormControl<ITable1['typeRefCrs163']>;
  crsInsertDate164: FormControl<ITable1['crsInsertDate164']>;
  dateCreaResv165: FormControl<ITable1['dateCreaResv165']>;
  datePremier166: FormControl<ITable1['datePremier166']>;
  statutPremier167: FormControl<ITable1['statutPremier167']>;
  dateDernier168: FormControl<ITable1['dateDernier168']>;
  statutDernier169: FormControl<ITable1['statutDernier169']>;
  dateDernierPseudo170: FormControl<ITable1['dateDernierPseudo170']>;
  statutDernierPseudo171: FormControl<ITable1['statutDernierPseudo171']>;
  diffDtCreaAnn172: FormControl<ITable1['diffDtCreaAnn172']>;
  diffDtArrAnn173: FormControl<ITable1['diffDtArrAnn173']>;
  leadtime174: FormControl<ITable1['leadtime174']>;
  los175: FormControl<ITable1['los175']>;
  occupantsGroupe176: FormControl<ITable1['occupantsGroupe176']>;
  nbNuitee177: FormControl<ITable1['nbNuitee177']>;
  nbNuiteeNnDed178: FormControl<ITable1['nbNuiteeNnDed178']>;
  nbResvAnn179: FormControl<ITable1['nbResvAnn179']>;
  nbAdu180: FormControl<ITable1['nbAdu180']>;
  nbEnf181: FormControl<ITable1['nbEnf181']>;
  nbPersDayU182: FormControl<ITable1['nbPersDayU182']>;
  nbPersArr183: FormControl<ITable1['nbPersArr183']>;
  nbPersDep184: FormControl<ITable1['nbPersDep184']>;
  nbPersAnn185: FormControl<ITable1['nbPersAnn185']>;
  nbPersNoshow186: FormControl<ITable1['nbPersNoshow186']>;
  nbChbDayU187: FormControl<ITable1['nbChbDayU187']>;
  nbChbArr188: FormControl<ITable1['nbChbArr188']>;
  nbChbDep189: FormControl<ITable1['nbChbDep189']>;
  nbChbAnn190: FormControl<ITable1['nbChbAnn190']>;
  nbChbNoshow191: FormControl<ITable1['nbChbNoshow191']>;
  revenuNetChambre192: FormControl<ITable1['revenuNetChambre192']>;
  revenuTaxeChambre193: FormControl<ITable1['revenuTaxeChambre193']>;
  revenuNetChambreGlobal194: FormControl<ITable1['revenuNetChambreGlobal194']>;
  revenuTaxeChambreGlobal195: FormControl<ITable1['revenuTaxeChambreGlobal195']>;
  revenuNetBq196: FormControl<ITable1['revenuNetBq196']>;
  revenuTaxeBq197: FormControl<ITable1['revenuTaxeBq197']>;
  revenuNetBqGlobal198: FormControl<ITable1['revenuNetBqGlobal198']>;
  revenuTaxeBqGlobal199: FormControl<ITable1['revenuTaxeBqGlobal199']>;
  revenuNetExtra200: FormControl<ITable1['revenuNetExtra200']>;
  revenuTaxeExtra201: FormControl<ITable1['revenuTaxeExtra201']>;
  revenuNetExtraGlobal202: FormControl<ITable1['revenuNetExtraGlobal202']>;
  revenuTaxeExtraGlobal203: FormControl<ITable1['revenuTaxeExtraGlobal203']>;
  revenuNetTotal204: FormControl<ITable1['revenuNetTotal204']>;
  revenuTaxeTotal205: FormControl<ITable1['revenuTaxeTotal205']>;
  revenuNetTotalGlobal206: FormControl<ITable1['revenuNetTotalGlobal206']>;
  revenuTaxeTotalGlobal207: FormControl<ITable1['revenuTaxeTotalGlobal207']>;
  prodRevenuChambre208: FormControl<ITable1['prodRevenuChambre208']>;
  prodRevenuBq209: FormControl<ITable1['prodRevenuBq209']>;
  prodRevenuExtra210: FormControl<ITable1['prodRevenuExtra210']>;
  prodRevenuTotal211: FormControl<ITable1['prodRevenuTotal211']>;
  prodChambreNbNuitees212: FormControl<ITable1['prodChambreNbNuitees212']>;
  techCreateDate213: FormControl<ITable1['techCreateDate213']>;
  techUpdateDate214: FormControl<ITable1['techUpdateDate214']>;
  numLigne215: FormControl<ITable1['numLigne215']>;
  resort216: FormControl<ITable1['resort216']>;
  resvNameId217: FormControl<ITable1['resvNameId217']>;
  clientOId218: FormControl<ITable1['clientOId218']>;
  typeChb219: FormControl<ITable1['typeChb219']>;
  confirmationNo220: FormControl<ITable1['confirmationNo220']>;
  clientMdmId221: FormControl<ITable1['clientMdmId221']>;
  nameId222: FormControl<ITable1['nameId222']>;
  parentResvNameId223: FormControl<ITable1['parentResvNameId223']>;
  contactId224: FormControl<ITable1['contactId224']>;
  agenceId225: FormControl<ITable1['agenceId225']>;
  agenceNom226: FormControl<ITable1['agenceNom226']>;
  societeId227: FormControl<ITable1['societeId227']>;
  groupeId228: FormControl<ITable1['groupeId228']>;
  numBloc229: FormControl<ITable1['numBloc229']>;
  typeResv230: FormControl<ITable1['typeResv230']>;
  statutResv231: FormControl<ITable1['statutResv231']>;
  dateDebutResv232: FormControl<ITable1['dateDebutResv232']>;
  dateFinResv233: FormControl<ITable1['dateFinResv233']>;
  truncDateDebutResv234: FormControl<ITable1['truncDateDebutResv234']>;
  truncDateFinResv235: FormControl<ITable1['truncDateFinResv235']>;
  dateAnnResv236: FormControl<ITable1['dateAnnResv236']>;
  pseudoRoomYn237: FormControl<ITable1['pseudoRoomYn237']>;
  createurResv238: FormControl<ITable1['createurResv238']>;
  nomCreateurResv239: FormControl<ITable1['nomCreateurResv239']>;
  codeGarantie240: FormControl<ITable1['codeGarantie240']>;
  flgDed241: FormControl<ITable1['flgDed241']>;
  codePays242: FormControl<ITable1['codePays242']>;
  libPays243: FormControl<ITable1['libPays243']>;
  codeNationalite244: FormControl<ITable1['codeNationalite244']>;
  libNationalite245: FormControl<ITable1['libNationalite245']>;
  codeSource246: FormControl<ITable1['codeSource246']>;
  libSource247: FormControl<ITable1['libSource247']>;
  codeGrandSource248: FormControl<ITable1['codeGrandSource248']>;
  codeOrigine249: FormControl<ITable1['codeOrigine249']>;
  libOrigine250: FormControl<ITable1['libOrigine250']>;
  codeMarche251: FormControl<ITable1['codeMarche251']>;
  libMarche252: FormControl<ITable1['libMarche252']>;
  codeGrandMarche253: FormControl<ITable1['codeGrandMarche253']>;
  libGrandMarche254: FormControl<ITable1['libGrandMarche254']>;
  codePrix255: FormControl<ITable1['codePrix255']>;
  categPrix256: FormControl<ITable1['categPrix256']>;
  libPrix257: FormControl<ITable1['libPrix257']>;
  numChb258: FormControl<ITable1['numChb258']>;
  descriptionTypeChb259: FormControl<ITable1['descriptionTypeChb259']>;
  codeTypeChb260: FormControl<ITable1['codeTypeChb260']>;
  classChb261: FormControl<ITable1['classChb261']>;
  caractChb262: FormControl<ITable1['caractChb262']>;
  typeChbDeReservation263: FormControl<ITable1['typeChbDeReservation263']>;
  descriptionTypeChbDeResv264: FormControl<ITable1['descriptionTypeChbDeResv264']>;
  codeTypeChbDeResv265: FormControl<ITable1['codeTypeChbDeResv265']>;
  statutDeReservation266: FormControl<ITable1['statutDeReservation266']>;
  circuitDistribution267: FormControl<ITable1['circuitDistribution267']>;
  circuitDistribUserRegroup268: FormControl<ITable1['circuitDistribUserRegroup268']>;
  numCrs269: FormControl<ITable1['numCrs269']>;
  typeRefCrs270: FormControl<ITable1['typeRefCrs270']>;
  crsInsertDate271: FormControl<ITable1['crsInsertDate271']>;
  dateCreaResv272: FormControl<ITable1['dateCreaResv272']>;
  datePremier273: FormControl<ITable1['datePremier273']>;
  statutPremier274: FormControl<ITable1['statutPremier274']>;
  dateDernier275: FormControl<ITable1['dateDernier275']>;
  statutDernier276: FormControl<ITable1['statutDernier276']>;
  dateDernierPseudo277: FormControl<ITable1['dateDernierPseudo277']>;
  statutDernierPseudo278: FormControl<ITable1['statutDernierPseudo278']>;
  diffDtCreaAnn279: FormControl<ITable1['diffDtCreaAnn279']>;
  diffDtArrAnn280: FormControl<ITable1['diffDtArrAnn280']>;
  leadtime281: FormControl<ITable1['leadtime281']>;
  los282: FormControl<ITable1['los282']>;
  occupantsGroupe283: FormControl<ITable1['occupantsGroupe283']>;
  nbNuitee284: FormControl<ITable1['nbNuitee284']>;
  nbNuiteeNnDed285: FormControl<ITable1['nbNuiteeNnDed285']>;
  nbResvAnn286: FormControl<ITable1['nbResvAnn286']>;
  nbAdu287: FormControl<ITable1['nbAdu287']>;
  nbEnf288: FormControl<ITable1['nbEnf288']>;
  nbPersDayU289: FormControl<ITable1['nbPersDayU289']>;
  nbPersArr290: FormControl<ITable1['nbPersArr290']>;
  nbPersDep291: FormControl<ITable1['nbPersDep291']>;
  nbPersAnn292: FormControl<ITable1['nbPersAnn292']>;
  nbPersNoshow293: FormControl<ITable1['nbPersNoshow293']>;
  nbChbDayU294: FormControl<ITable1['nbChbDayU294']>;
  nbChbArr295: FormControl<ITable1['nbChbArr295']>;
  nbChbDep296: FormControl<ITable1['nbChbDep296']>;
  nbChbAnn297: FormControl<ITable1['nbChbAnn297']>;
  nbChbNoshow298: FormControl<ITable1['nbChbNoshow298']>;
  revenuNetChambre299: FormControl<ITable1['revenuNetChambre299']>;
  revenuTaxeChambre300: FormControl<ITable1['revenuTaxeChambre300']>;
  revenuNetChambreGlobal301: FormControl<ITable1['revenuNetChambreGlobal301']>;
  revenuTaxeChambreGlobal302: FormControl<ITable1['revenuTaxeChambreGlobal302']>;
  revenuNetBq303: FormControl<ITable1['revenuNetBq303']>;
  revenuTaxeBq304: FormControl<ITable1['revenuTaxeBq304']>;
  revenuNetBqGlobal305: FormControl<ITable1['revenuNetBqGlobal305']>;
  revenuTaxeBqGlobal306: FormControl<ITable1['revenuTaxeBqGlobal306']>;
  revenuNetExtra307: FormControl<ITable1['revenuNetExtra307']>;
  revenuTaxeExtra308: FormControl<ITable1['revenuTaxeExtra308']>;
  revenuNetExtraGlobal309: FormControl<ITable1['revenuNetExtraGlobal309']>;
  revenuTaxeExtraGlobal310: FormControl<ITable1['revenuTaxeExtraGlobal310']>;
};

export type Table1FormGroup = FormGroup<Table1FormGroupContent>;

@Injectable({ providedIn: 'root' })
export class Table1FormService {
  createTable1FormGroup(table1: Table1FormGroupInput = { id: null }): Table1FormGroup {
    const table1RawValue = {
      ...this.getFormDefaults(),
      ...table1,
    };
    return new FormGroup<Table1FormGroupContent>({
      id: new FormControl(
        { value: table1RawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      numLigne1: new FormControl(table1RawValue.numLigne1),
      resort2: new FormControl(table1RawValue.resort2),
      resvNameId3: new FormControl(table1RawValue.resvNameId3),
      clientOId4: new FormControl(table1RawValue.clientOId4),
      typeChb5: new FormControl(table1RawValue.typeChb5),
      confirmationNo6: new FormControl(table1RawValue.confirmationNo6),
      clientMdmId7: new FormControl(table1RawValue.clientMdmId7),
      nameId8: new FormControl(table1RawValue.nameId8),
      parentResvNameId9: new FormControl(table1RawValue.parentResvNameId9),
      contactId10: new FormControl(table1RawValue.contactId10),
      agenceId11: new FormControl(table1RawValue.agenceId11),
      agenceNom12: new FormControl(table1RawValue.agenceNom12),
      societeId13: new FormControl(table1RawValue.societeId13),
      groupeId14: new FormControl(table1RawValue.groupeId14),
      numBloc15: new FormControl(table1RawValue.numBloc15),
      typeResv16: new FormControl(table1RawValue.typeResv16),
      statutResv17: new FormControl(table1RawValue.statutResv17),
      dateDebutResv18: new FormControl(table1RawValue.dateDebutResv18),
      dateFinResv19: new FormControl(table1RawValue.dateFinResv19),
      truncDateDebutResv20: new FormControl(table1RawValue.truncDateDebutResv20),
      truncDateFinResv21: new FormControl(table1RawValue.truncDateFinResv21),
      dateAnnResv22: new FormControl(table1RawValue.dateAnnResv22),
      pseudoRoomYn23: new FormControl(table1RawValue.pseudoRoomYn23),
      createurResv24: new FormControl(table1RawValue.createurResv24),
      nomCreateurResv25: new FormControl(table1RawValue.nomCreateurResv25),
      codeGarantie26: new FormControl(table1RawValue.codeGarantie26),
      flgDed27: new FormControl(table1RawValue.flgDed27),
      codePays28: new FormControl(table1RawValue.codePays28),
      libPays29: new FormControl(table1RawValue.libPays29),
      codeNationalite30: new FormControl(table1RawValue.codeNationalite30),
      libNationalite31: new FormControl(table1RawValue.libNationalite31),
      codeSource32: new FormControl(table1RawValue.codeSource32),
      libSource33: new FormControl(table1RawValue.libSource33),
      codeGrandSource34: new FormControl(table1RawValue.codeGrandSource34),
      codeOrigine35: new FormControl(table1RawValue.codeOrigine35),
      libOrigine36: new FormControl(table1RawValue.libOrigine36),
      codeMarche37: new FormControl(table1RawValue.codeMarche37),
      libMarche38: new FormControl(table1RawValue.libMarche38),
      codeGrandMarche39: new FormControl(table1RawValue.codeGrandMarche39),
      libGrandMarche40: new FormControl(table1RawValue.libGrandMarche40),
      codePrix41: new FormControl(table1RawValue.codePrix41),
      categPrix42: new FormControl(table1RawValue.categPrix42),
      libPrix43: new FormControl(table1RawValue.libPrix43),
      numChb44: new FormControl(table1RawValue.numChb44),
      descriptionTypeChb45: new FormControl(table1RawValue.descriptionTypeChb45),
      codeTypeChb46: new FormControl(table1RawValue.codeTypeChb46),
      classChb47: new FormControl(table1RawValue.classChb47),
      caractChb48: new FormControl(table1RawValue.caractChb48),
      typeChbDeReservation49: new FormControl(table1RawValue.typeChbDeReservation49),
      descriptionTypeChbDeResv50: new FormControl(table1RawValue.descriptionTypeChbDeResv50),
      codeTypeChbDeResv51: new FormControl(table1RawValue.codeTypeChbDeResv51),
      statutDeReservation52: new FormControl(table1RawValue.statutDeReservation52),
      circuitDistribution53: new FormControl(table1RawValue.circuitDistribution53),
      circuitDistribUserRegroup54: new FormControl(table1RawValue.circuitDistribUserRegroup54),
      numCrs55: new FormControl(table1RawValue.numCrs55),
      typeRefCrs56: new FormControl(table1RawValue.typeRefCrs56),
      crsInsertDate57: new FormControl(table1RawValue.crsInsertDate57),
      dateCreaResv58: new FormControl(table1RawValue.dateCreaResv58),
      datePremier59: new FormControl(table1RawValue.datePremier59),
      statutPremier60: new FormControl(table1RawValue.statutPremier60),
      dateDernier61: new FormControl(table1RawValue.dateDernier61),
      statutDernier62: new FormControl(table1RawValue.statutDernier62),
      dateDernierPseudo63: new FormControl(table1RawValue.dateDernierPseudo63),
      statutDernierPseudo64: new FormControl(table1RawValue.statutDernierPseudo64),
      diffDtCreaAnn65: new FormControl(table1RawValue.diffDtCreaAnn65),
      diffDtArrAnn66: new FormControl(table1RawValue.diffDtArrAnn66),
      leadtime67: new FormControl(table1RawValue.leadtime67),
      los68: new FormControl(table1RawValue.los68),
      occupantsGroupe69: new FormControl(table1RawValue.occupantsGroupe69),
      nbNuitee70: new FormControl(table1RawValue.nbNuitee70),
      nbNuiteeNnDed71: new FormControl(table1RawValue.nbNuiteeNnDed71),
      nbResvAnn72: new FormControl(table1RawValue.nbResvAnn72),
      nbAdu73: new FormControl(table1RawValue.nbAdu73),
      nbEnf74: new FormControl(table1RawValue.nbEnf74),
      nbPersDayU75: new FormControl(table1RawValue.nbPersDayU75),
      nbPersArr76: new FormControl(table1RawValue.nbPersArr76),
      nbPersDep77: new FormControl(table1RawValue.nbPersDep77),
      nbPersAnn78: new FormControl(table1RawValue.nbPersAnn78),
      nbPersNoshow79: new FormControl(table1RawValue.nbPersNoshow79),
      nbChbDayU80: new FormControl(table1RawValue.nbChbDayU80),
      nbChbArr81: new FormControl(table1RawValue.nbChbArr81),
      nbChbDep82: new FormControl(table1RawValue.nbChbDep82),
      nbChbAnn83: new FormControl(table1RawValue.nbChbAnn83),
      nbChbNoshow84: new FormControl(table1RawValue.nbChbNoshow84),
      revenuNetChambre85: new FormControl(table1RawValue.revenuNetChambre85),
      revenuTaxeChambre86: new FormControl(table1RawValue.revenuTaxeChambre86),
      revenuNetChambreGlobal87: new FormControl(table1RawValue.revenuNetChambreGlobal87),
      revenuTaxeChambreGlobal88: new FormControl(table1RawValue.revenuTaxeChambreGlobal88),
      revenuNetBq89: new FormControl(table1RawValue.revenuNetBq89),
      revenuTaxeBq90: new FormControl(table1RawValue.revenuTaxeBq90),
      revenuNetBqGlobal91: new FormControl(table1RawValue.revenuNetBqGlobal91),
      revenuTaxeBqGlobal92: new FormControl(table1RawValue.revenuTaxeBqGlobal92),
      revenuNetExtra93: new FormControl(table1RawValue.revenuNetExtra93),
      revenuTaxeExtra94: new FormControl(table1RawValue.revenuTaxeExtra94),
      revenuNetExtraGlobal95: new FormControl(table1RawValue.revenuNetExtraGlobal95),
      revenuTaxeExtraGlobal96: new FormControl(table1RawValue.revenuTaxeExtraGlobal96),
      revenuNetTotal97: new FormControl(table1RawValue.revenuNetTotal97),
      revenuTaxeTotal98: new FormControl(table1RawValue.revenuTaxeTotal98),
      revenuNetTotalGlobal99: new FormControl(table1RawValue.revenuNetTotalGlobal99),
      revenuTaxeTotalGlobal100: new FormControl(table1RawValue.revenuTaxeTotalGlobal100),
      prodRevenuChambre101: new FormControl(table1RawValue.prodRevenuChambre101),
      prodRevenuBq102: new FormControl(table1RawValue.prodRevenuBq102),
      prodRevenuExtra103: new FormControl(table1RawValue.prodRevenuExtra103),
      prodRevenuTotal104: new FormControl(table1RawValue.prodRevenuTotal104),
      prodChambreNbNuitees105: new FormControl(table1RawValue.prodChambreNbNuitees105),
      techCreateDate106: new FormControl(table1RawValue.techCreateDate106),
      techUpdateDate107: new FormControl(table1RawValue.techUpdateDate107),
      numLigne108: new FormControl(table1RawValue.numLigne108),
      resort109: new FormControl(table1RawValue.resort109),
      resvNameId110: new FormControl(table1RawValue.resvNameId110),
      clientOId111: new FormControl(table1RawValue.clientOId111),
      typeChb112: new FormControl(table1RawValue.typeChb112),
      confirmationNo113: new FormControl(table1RawValue.confirmationNo113),
      clientMdmId114: new FormControl(table1RawValue.clientMdmId114),
      nameId115: new FormControl(table1RawValue.nameId115),
      parentResvNameId116: new FormControl(table1RawValue.parentResvNameId116),
      contactId117: new FormControl(table1RawValue.contactId117),
      agenceId118: new FormControl(table1RawValue.agenceId118),
      agenceNom119: new FormControl(table1RawValue.agenceNom119),
      societeId120: new FormControl(table1RawValue.societeId120),
      groupeId121: new FormControl(table1RawValue.groupeId121),
      numBloc122: new FormControl(table1RawValue.numBloc122),
      typeResv123: new FormControl(table1RawValue.typeResv123),
      statutResv124: new FormControl(table1RawValue.statutResv124),
      dateDebutResv125: new FormControl(table1RawValue.dateDebutResv125),
      dateFinResv126: new FormControl(table1RawValue.dateFinResv126),
      truncDateDebutResv127: new FormControl(table1RawValue.truncDateDebutResv127),
      truncDateFinResv128: new FormControl(table1RawValue.truncDateFinResv128),
      dateAnnResv129: new FormControl(table1RawValue.dateAnnResv129),
      pseudoRoomYn130: new FormControl(table1RawValue.pseudoRoomYn130),
      createurResv131: new FormControl(table1RawValue.createurResv131),
      nomCreateurResv132: new FormControl(table1RawValue.nomCreateurResv132),
      codeGarantie133: new FormControl(table1RawValue.codeGarantie133),
      flgDed134: new FormControl(table1RawValue.flgDed134),
      codePays135: new FormControl(table1RawValue.codePays135),
      libPays136: new FormControl(table1RawValue.libPays136),
      codeNationalite137: new FormControl(table1RawValue.codeNationalite137),
      libNationalite138: new FormControl(table1RawValue.libNationalite138),
      codeSource139: new FormControl(table1RawValue.codeSource139),
      libSource140: new FormControl(table1RawValue.libSource140),
      codeGrandSource141: new FormControl(table1RawValue.codeGrandSource141),
      codeOrigine142: new FormControl(table1RawValue.codeOrigine142),
      libOrigine143: new FormControl(table1RawValue.libOrigine143),
      codeMarche144: new FormControl(table1RawValue.codeMarche144),
      libMarche145: new FormControl(table1RawValue.libMarche145),
      codeGrandMarche146: new FormControl(table1RawValue.codeGrandMarche146),
      libGrandMarche147: new FormControl(table1RawValue.libGrandMarche147),
      codePrix148: new FormControl(table1RawValue.codePrix148),
      categPrix149: new FormControl(table1RawValue.categPrix149),
      libPrix150: new FormControl(table1RawValue.libPrix150),
      numChb151: new FormControl(table1RawValue.numChb151),
      descriptionTypeChb152: new FormControl(table1RawValue.descriptionTypeChb152),
      codeTypeChb153: new FormControl(table1RawValue.codeTypeChb153),
      classChb154: new FormControl(table1RawValue.classChb154),
      caractChb155: new FormControl(table1RawValue.caractChb155),
      typeChbDeReservation156: new FormControl(table1RawValue.typeChbDeReservation156),
      descriptionTypeChbDeResv157: new FormControl(table1RawValue.descriptionTypeChbDeResv157),
      codeTypeChbDeResv158: new FormControl(table1RawValue.codeTypeChbDeResv158),
      statutDeReservation159: new FormControl(table1RawValue.statutDeReservation159),
      circuitDistribution160: new FormControl(table1RawValue.circuitDistribution160),
      circuitDistribUserRegroup161: new FormControl(table1RawValue.circuitDistribUserRegroup161),
      numCrs162: new FormControl(table1RawValue.numCrs162),
      typeRefCrs163: new FormControl(table1RawValue.typeRefCrs163),
      crsInsertDate164: new FormControl(table1RawValue.crsInsertDate164),
      dateCreaResv165: new FormControl(table1RawValue.dateCreaResv165),
      datePremier166: new FormControl(table1RawValue.datePremier166),
      statutPremier167: new FormControl(table1RawValue.statutPremier167),
      dateDernier168: new FormControl(table1RawValue.dateDernier168),
      statutDernier169: new FormControl(table1RawValue.statutDernier169),
      dateDernierPseudo170: new FormControl(table1RawValue.dateDernierPseudo170),
      statutDernierPseudo171: new FormControl(table1RawValue.statutDernierPseudo171),
      diffDtCreaAnn172: new FormControl(table1RawValue.diffDtCreaAnn172),
      diffDtArrAnn173: new FormControl(table1RawValue.diffDtArrAnn173),
      leadtime174: new FormControl(table1RawValue.leadtime174),
      los175: new FormControl(table1RawValue.los175),
      occupantsGroupe176: new FormControl(table1RawValue.occupantsGroupe176),
      nbNuitee177: new FormControl(table1RawValue.nbNuitee177),
      nbNuiteeNnDed178: new FormControl(table1RawValue.nbNuiteeNnDed178),
      nbResvAnn179: new FormControl(table1RawValue.nbResvAnn179),
      nbAdu180: new FormControl(table1RawValue.nbAdu180),
      nbEnf181: new FormControl(table1RawValue.nbEnf181),
      nbPersDayU182: new FormControl(table1RawValue.nbPersDayU182),
      nbPersArr183: new FormControl(table1RawValue.nbPersArr183),
      nbPersDep184: new FormControl(table1RawValue.nbPersDep184),
      nbPersAnn185: new FormControl(table1RawValue.nbPersAnn185),
      nbPersNoshow186: new FormControl(table1RawValue.nbPersNoshow186),
      nbChbDayU187: new FormControl(table1RawValue.nbChbDayU187),
      nbChbArr188: new FormControl(table1RawValue.nbChbArr188),
      nbChbDep189: new FormControl(table1RawValue.nbChbDep189),
      nbChbAnn190: new FormControl(table1RawValue.nbChbAnn190),
      nbChbNoshow191: new FormControl(table1RawValue.nbChbNoshow191),
      revenuNetChambre192: new FormControl(table1RawValue.revenuNetChambre192),
      revenuTaxeChambre193: new FormControl(table1RawValue.revenuTaxeChambre193),
      revenuNetChambreGlobal194: new FormControl(table1RawValue.revenuNetChambreGlobal194),
      revenuTaxeChambreGlobal195: new FormControl(table1RawValue.revenuTaxeChambreGlobal195),
      revenuNetBq196: new FormControl(table1RawValue.revenuNetBq196),
      revenuTaxeBq197: new FormControl(table1RawValue.revenuTaxeBq197),
      revenuNetBqGlobal198: new FormControl(table1RawValue.revenuNetBqGlobal198),
      revenuTaxeBqGlobal199: new FormControl(table1RawValue.revenuTaxeBqGlobal199),
      revenuNetExtra200: new FormControl(table1RawValue.revenuNetExtra200),
      revenuTaxeExtra201: new FormControl(table1RawValue.revenuTaxeExtra201),
      revenuNetExtraGlobal202: new FormControl(table1RawValue.revenuNetExtraGlobal202),
      revenuTaxeExtraGlobal203: new FormControl(table1RawValue.revenuTaxeExtraGlobal203),
      revenuNetTotal204: new FormControl(table1RawValue.revenuNetTotal204),
      revenuTaxeTotal205: new FormControl(table1RawValue.revenuTaxeTotal205),
      revenuNetTotalGlobal206: new FormControl(table1RawValue.revenuNetTotalGlobal206),
      revenuTaxeTotalGlobal207: new FormControl(table1RawValue.revenuTaxeTotalGlobal207),
      prodRevenuChambre208: new FormControl(table1RawValue.prodRevenuChambre208),
      prodRevenuBq209: new FormControl(table1RawValue.prodRevenuBq209),
      prodRevenuExtra210: new FormControl(table1RawValue.prodRevenuExtra210),
      prodRevenuTotal211: new FormControl(table1RawValue.prodRevenuTotal211),
      prodChambreNbNuitees212: new FormControl(table1RawValue.prodChambreNbNuitees212),
      techCreateDate213: new FormControl(table1RawValue.techCreateDate213),
      techUpdateDate214: new FormControl(table1RawValue.techUpdateDate214),
      numLigne215: new FormControl(table1RawValue.numLigne215),
      resort216: new FormControl(table1RawValue.resort216),
      resvNameId217: new FormControl(table1RawValue.resvNameId217),
      clientOId218: new FormControl(table1RawValue.clientOId218),
      typeChb219: new FormControl(table1RawValue.typeChb219),
      confirmationNo220: new FormControl(table1RawValue.confirmationNo220),
      clientMdmId221: new FormControl(table1RawValue.clientMdmId221),
      nameId222: new FormControl(table1RawValue.nameId222),
      parentResvNameId223: new FormControl(table1RawValue.parentResvNameId223),
      contactId224: new FormControl(table1RawValue.contactId224),
      agenceId225: new FormControl(table1RawValue.agenceId225),
      agenceNom226: new FormControl(table1RawValue.agenceNom226),
      societeId227: new FormControl(table1RawValue.societeId227),
      groupeId228: new FormControl(table1RawValue.groupeId228),
      numBloc229: new FormControl(table1RawValue.numBloc229),
      typeResv230: new FormControl(table1RawValue.typeResv230),
      statutResv231: new FormControl(table1RawValue.statutResv231),
      dateDebutResv232: new FormControl(table1RawValue.dateDebutResv232),
      dateFinResv233: new FormControl(table1RawValue.dateFinResv233),
      truncDateDebutResv234: new FormControl(table1RawValue.truncDateDebutResv234),
      truncDateFinResv235: new FormControl(table1RawValue.truncDateFinResv235),
      dateAnnResv236: new FormControl(table1RawValue.dateAnnResv236),
      pseudoRoomYn237: new FormControl(table1RawValue.pseudoRoomYn237),
      createurResv238: new FormControl(table1RawValue.createurResv238),
      nomCreateurResv239: new FormControl(table1RawValue.nomCreateurResv239),
      codeGarantie240: new FormControl(table1RawValue.codeGarantie240),
      flgDed241: new FormControl(table1RawValue.flgDed241),
      codePays242: new FormControl(table1RawValue.codePays242),
      libPays243: new FormControl(table1RawValue.libPays243),
      codeNationalite244: new FormControl(table1RawValue.codeNationalite244),
      libNationalite245: new FormControl(table1RawValue.libNationalite245),
      codeSource246: new FormControl(table1RawValue.codeSource246),
      libSource247: new FormControl(table1RawValue.libSource247),
      codeGrandSource248: new FormControl(table1RawValue.codeGrandSource248),
      codeOrigine249: new FormControl(table1RawValue.codeOrigine249),
      libOrigine250: new FormControl(table1RawValue.libOrigine250),
      codeMarche251: new FormControl(table1RawValue.codeMarche251),
      libMarche252: new FormControl(table1RawValue.libMarche252),
      codeGrandMarche253: new FormControl(table1RawValue.codeGrandMarche253),
      libGrandMarche254: new FormControl(table1RawValue.libGrandMarche254),
      codePrix255: new FormControl(table1RawValue.codePrix255),
      categPrix256: new FormControl(table1RawValue.categPrix256),
      libPrix257: new FormControl(table1RawValue.libPrix257),
      numChb258: new FormControl(table1RawValue.numChb258),
      descriptionTypeChb259: new FormControl(table1RawValue.descriptionTypeChb259),
      codeTypeChb260: new FormControl(table1RawValue.codeTypeChb260),
      classChb261: new FormControl(table1RawValue.classChb261),
      caractChb262: new FormControl(table1RawValue.caractChb262),
      typeChbDeReservation263: new FormControl(table1RawValue.typeChbDeReservation263),
      descriptionTypeChbDeResv264: new FormControl(table1RawValue.descriptionTypeChbDeResv264),
      codeTypeChbDeResv265: new FormControl(table1RawValue.codeTypeChbDeResv265),
      statutDeReservation266: new FormControl(table1RawValue.statutDeReservation266),
      circuitDistribution267: new FormControl(table1RawValue.circuitDistribution267),
      circuitDistribUserRegroup268: new FormControl(table1RawValue.circuitDistribUserRegroup268),
      numCrs269: new FormControl(table1RawValue.numCrs269),
      typeRefCrs270: new FormControl(table1RawValue.typeRefCrs270),
      crsInsertDate271: new FormControl(table1RawValue.crsInsertDate271),
      dateCreaResv272: new FormControl(table1RawValue.dateCreaResv272),
      datePremier273: new FormControl(table1RawValue.datePremier273),
      statutPremier274: new FormControl(table1RawValue.statutPremier274),
      dateDernier275: new FormControl(table1RawValue.dateDernier275),
      statutDernier276: new FormControl(table1RawValue.statutDernier276),
      dateDernierPseudo277: new FormControl(table1RawValue.dateDernierPseudo277),
      statutDernierPseudo278: new FormControl(table1RawValue.statutDernierPseudo278),
      diffDtCreaAnn279: new FormControl(table1RawValue.diffDtCreaAnn279),
      diffDtArrAnn280: new FormControl(table1RawValue.diffDtArrAnn280),
      leadtime281: new FormControl(table1RawValue.leadtime281),
      los282: new FormControl(table1RawValue.los282),
      occupantsGroupe283: new FormControl(table1RawValue.occupantsGroupe283),
      nbNuitee284: new FormControl(table1RawValue.nbNuitee284),
      nbNuiteeNnDed285: new FormControl(table1RawValue.nbNuiteeNnDed285),
      nbResvAnn286: new FormControl(table1RawValue.nbResvAnn286),
      nbAdu287: new FormControl(table1RawValue.nbAdu287),
      nbEnf288: new FormControl(table1RawValue.nbEnf288),
      nbPersDayU289: new FormControl(table1RawValue.nbPersDayU289),
      nbPersArr290: new FormControl(table1RawValue.nbPersArr290),
      nbPersDep291: new FormControl(table1RawValue.nbPersDep291),
      nbPersAnn292: new FormControl(table1RawValue.nbPersAnn292),
      nbPersNoshow293: new FormControl(table1RawValue.nbPersNoshow293),
      nbChbDayU294: new FormControl(table1RawValue.nbChbDayU294),
      nbChbArr295: new FormControl(table1RawValue.nbChbArr295),
      nbChbDep296: new FormControl(table1RawValue.nbChbDep296),
      nbChbAnn297: new FormControl(table1RawValue.nbChbAnn297),
      nbChbNoshow298: new FormControl(table1RawValue.nbChbNoshow298),
      revenuNetChambre299: new FormControl(table1RawValue.revenuNetChambre299),
      revenuTaxeChambre300: new FormControl(table1RawValue.revenuTaxeChambre300),
      revenuNetChambreGlobal301: new FormControl(table1RawValue.revenuNetChambreGlobal301),
      revenuTaxeChambreGlobal302: new FormControl(table1RawValue.revenuTaxeChambreGlobal302),
      revenuNetBq303: new FormControl(table1RawValue.revenuNetBq303),
      revenuTaxeBq304: new FormControl(table1RawValue.revenuTaxeBq304),
      revenuNetBqGlobal305: new FormControl(table1RawValue.revenuNetBqGlobal305),
      revenuTaxeBqGlobal306: new FormControl(table1RawValue.revenuTaxeBqGlobal306),
      revenuNetExtra307: new FormControl(table1RawValue.revenuNetExtra307),
      revenuTaxeExtra308: new FormControl(table1RawValue.revenuTaxeExtra308),
      revenuNetExtraGlobal309: new FormControl(table1RawValue.revenuNetExtraGlobal309),
      revenuTaxeExtraGlobal310: new FormControl(table1RawValue.revenuTaxeExtraGlobal310),
    });
  }

  getTable1(form: Table1FormGroup): ITable1 | NewTable1 {
    return form.getRawValue() as ITable1 | NewTable1;
  }

  resetForm(form: Table1FormGroup, table1: Table1FormGroupInput): void {
    const table1RawValue = { ...this.getFormDefaults(), ...table1 };
    form.reset(
      {
        ...table1RawValue,
        id: { value: table1RawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): Table1FormDefaults {
    return {
      id: null,
    };
  }
}
