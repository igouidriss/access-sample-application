import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ITable4, NewTable4 } from '../table-4.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ITable4 for edit and NewTable4FormGroupInput for create.
 */
type Table4FormGroupInput = ITable4 | PartialWithRequiredKeyOf<NewTable4>;

type Table4FormDefaults = Pick<NewTable4, 'id'>;

type Table4FormGroupContent = {
  id: FormControl<ITable4['id'] | NewTable4['id']>;
  numLigne1: FormControl<ITable4['numLigne1']>;
  resort2: FormControl<ITable4['resort2']>;
  resvNameId3: FormControl<ITable4['resvNameId3']>;
  clientOId4: FormControl<ITable4['clientOId4']>;
  typeChb5: FormControl<ITable4['typeChb5']>;
  confirmationNo6: FormControl<ITable4['confirmationNo6']>;
  clientMdmId7: FormControl<ITable4['clientMdmId7']>;
  nameId8: FormControl<ITable4['nameId8']>;
  parentResvNameId9: FormControl<ITable4['parentResvNameId9']>;
  contactId10: FormControl<ITable4['contactId10']>;
  agenceId11: FormControl<ITable4['agenceId11']>;
  agenceNom12: FormControl<ITable4['agenceNom12']>;
  societeId13: FormControl<ITable4['societeId13']>;
  groupeId14: FormControl<ITable4['groupeId14']>;
  numBloc15: FormControl<ITable4['numBloc15']>;
  typeResv16: FormControl<ITable4['typeResv16']>;
  statutResv17: FormControl<ITable4['statutResv17']>;
  dateDebutResv18: FormControl<ITable4['dateDebutResv18']>;
  dateFinResv19: FormControl<ITable4['dateFinResv19']>;
  truncDateDebutResv20: FormControl<ITable4['truncDateDebutResv20']>;
  truncDateFinResv21: FormControl<ITable4['truncDateFinResv21']>;
  dateAnnResv22: FormControl<ITable4['dateAnnResv22']>;
  pseudoRoomYn23: FormControl<ITable4['pseudoRoomYn23']>;
  createurResv24: FormControl<ITable4['createurResv24']>;
  nomCreateurResv25: FormControl<ITable4['nomCreateurResv25']>;
  codeGarantie26: FormControl<ITable4['codeGarantie26']>;
  flgDed27: FormControl<ITable4['flgDed27']>;
  codePays28: FormControl<ITable4['codePays28']>;
  libPays29: FormControl<ITable4['libPays29']>;
  codeNationalite30: FormControl<ITable4['codeNationalite30']>;
  libNationalite31: FormControl<ITable4['libNationalite31']>;
  codeSource32: FormControl<ITable4['codeSource32']>;
  libSource33: FormControl<ITable4['libSource33']>;
  codeGrandSource34: FormControl<ITable4['codeGrandSource34']>;
  codeOrigine35: FormControl<ITable4['codeOrigine35']>;
  libOrigine36: FormControl<ITable4['libOrigine36']>;
  codeMarche37: FormControl<ITable4['codeMarche37']>;
  libMarche38: FormControl<ITable4['libMarche38']>;
  codeGrandMarche39: FormControl<ITable4['codeGrandMarche39']>;
  libGrandMarche40: FormControl<ITable4['libGrandMarche40']>;
  codePrix41: FormControl<ITable4['codePrix41']>;
  categPrix42: FormControl<ITable4['categPrix42']>;
  libPrix43: FormControl<ITable4['libPrix43']>;
  numChb44: FormControl<ITable4['numChb44']>;
  descriptionTypeChb45: FormControl<ITable4['descriptionTypeChb45']>;
  codeTypeChb46: FormControl<ITable4['codeTypeChb46']>;
  classChb47: FormControl<ITable4['classChb47']>;
  caractChb48: FormControl<ITable4['caractChb48']>;
  typeChbDeReservation49: FormControl<ITable4['typeChbDeReservation49']>;
  descriptionTypeChbDeResv50: FormControl<ITable4['descriptionTypeChbDeResv50']>;
  codeTypeChbDeResv51: FormControl<ITable4['codeTypeChbDeResv51']>;
  statutDeReservation52: FormControl<ITable4['statutDeReservation52']>;
  circuitDistribution53: FormControl<ITable4['circuitDistribution53']>;
  circuitDistribUserRegroup54: FormControl<ITable4['circuitDistribUserRegroup54']>;
  numCrs55: FormControl<ITable4['numCrs55']>;
  typeRefCrs56: FormControl<ITable4['typeRefCrs56']>;
  crsInsertDate57: FormControl<ITable4['crsInsertDate57']>;
  dateCreaResv58: FormControl<ITable4['dateCreaResv58']>;
  datePremier59: FormControl<ITable4['datePremier59']>;
  statutPremier60: FormControl<ITable4['statutPremier60']>;
  dateDernier61: FormControl<ITable4['dateDernier61']>;
  statutDernier62: FormControl<ITable4['statutDernier62']>;
  dateDernierPseudo63: FormControl<ITable4['dateDernierPseudo63']>;
  statutDernierPseudo64: FormControl<ITable4['statutDernierPseudo64']>;
  diffDtCreaAnn65: FormControl<ITable4['diffDtCreaAnn65']>;
  diffDtArrAnn66: FormControl<ITable4['diffDtArrAnn66']>;
  leadtime67: FormControl<ITable4['leadtime67']>;
  los68: FormControl<ITable4['los68']>;
  occupantsGroupe69: FormControl<ITable4['occupantsGroupe69']>;
  nbNuitee70: FormControl<ITable4['nbNuitee70']>;
  nbNuiteeNnDed71: FormControl<ITable4['nbNuiteeNnDed71']>;
  nbResvAnn72: FormControl<ITable4['nbResvAnn72']>;
  nbAdu73: FormControl<ITable4['nbAdu73']>;
  nbEnf74: FormControl<ITable4['nbEnf74']>;
  nbPersDayU75: FormControl<ITable4['nbPersDayU75']>;
  nbPersArr76: FormControl<ITable4['nbPersArr76']>;
  nbPersDep77: FormControl<ITable4['nbPersDep77']>;
  nbPersAnn78: FormControl<ITable4['nbPersAnn78']>;
  nbPersNoshow79: FormControl<ITable4['nbPersNoshow79']>;
  nbChbDayU80: FormControl<ITable4['nbChbDayU80']>;
  nbChbArr81: FormControl<ITable4['nbChbArr81']>;
  nbChbDep82: FormControl<ITable4['nbChbDep82']>;
  nbChbAnn83: FormControl<ITable4['nbChbAnn83']>;
  nbChbNoshow84: FormControl<ITable4['nbChbNoshow84']>;
  revenuNetChambre85: FormControl<ITable4['revenuNetChambre85']>;
  revenuTaxeChambre86: FormControl<ITable4['revenuTaxeChambre86']>;
  revenuNetChambreGlobal87: FormControl<ITable4['revenuNetChambreGlobal87']>;
  revenuTaxeChambreGlobal88: FormControl<ITable4['revenuTaxeChambreGlobal88']>;
  revenuNetBq89: FormControl<ITable4['revenuNetBq89']>;
  revenuTaxeBq90: FormControl<ITable4['revenuTaxeBq90']>;
  revenuNetBqGlobal91: FormControl<ITable4['revenuNetBqGlobal91']>;
  revenuTaxeBqGlobal92: FormControl<ITable4['revenuTaxeBqGlobal92']>;
  revenuNetExtra93: FormControl<ITable4['revenuNetExtra93']>;
  revenuTaxeExtra94: FormControl<ITable4['revenuTaxeExtra94']>;
  revenuNetExtraGlobal95: FormControl<ITable4['revenuNetExtraGlobal95']>;
  revenuTaxeExtraGlobal96: FormControl<ITable4['revenuTaxeExtraGlobal96']>;
  revenuNetTotal97: FormControl<ITable4['revenuNetTotal97']>;
  revenuTaxeTotal98: FormControl<ITable4['revenuTaxeTotal98']>;
  revenuNetTotalGlobal99: FormControl<ITable4['revenuNetTotalGlobal99']>;
  revenuTaxeTotalGlobal100: FormControl<ITable4['revenuTaxeTotalGlobal100']>;
  prodRevenuChambre101: FormControl<ITable4['prodRevenuChambre101']>;
  prodRevenuBq102: FormControl<ITable4['prodRevenuBq102']>;
  prodRevenuExtra103: FormControl<ITable4['prodRevenuExtra103']>;
  prodRevenuTotal104: FormControl<ITable4['prodRevenuTotal104']>;
  prodChambreNbNuitees105: FormControl<ITable4['prodChambreNbNuitees105']>;
  techCreateDate106: FormControl<ITable4['techCreateDate106']>;
  techUpdateDate107: FormControl<ITable4['techUpdateDate107']>;
  numLigne108: FormControl<ITable4['numLigne108']>;
  resort109: FormControl<ITable4['resort109']>;
  resvNameId110: FormControl<ITable4['resvNameId110']>;
  clientOId111: FormControl<ITable4['clientOId111']>;
  typeChb112: FormControl<ITable4['typeChb112']>;
  confirmationNo113: FormControl<ITable4['confirmationNo113']>;
  clientMdmId114: FormControl<ITable4['clientMdmId114']>;
  nameId115: FormControl<ITable4['nameId115']>;
  parentResvNameId116: FormControl<ITable4['parentResvNameId116']>;
  contactId117: FormControl<ITable4['contactId117']>;
  agenceId118: FormControl<ITable4['agenceId118']>;
  agenceNom119: FormControl<ITable4['agenceNom119']>;
  societeId120: FormControl<ITable4['societeId120']>;
  groupeId121: FormControl<ITable4['groupeId121']>;
  numBloc122: FormControl<ITable4['numBloc122']>;
  typeResv123: FormControl<ITable4['typeResv123']>;
  statutResv124: FormControl<ITable4['statutResv124']>;
  dateDebutResv125: FormControl<ITable4['dateDebutResv125']>;
  dateFinResv126: FormControl<ITable4['dateFinResv126']>;
  truncDateDebutResv127: FormControl<ITable4['truncDateDebutResv127']>;
  truncDateFinResv128: FormControl<ITable4['truncDateFinResv128']>;
  dateAnnResv129: FormControl<ITable4['dateAnnResv129']>;
  pseudoRoomYn130: FormControl<ITable4['pseudoRoomYn130']>;
  createurResv131: FormControl<ITable4['createurResv131']>;
  nomCreateurResv132: FormControl<ITable4['nomCreateurResv132']>;
  codeGarantie133: FormControl<ITable4['codeGarantie133']>;
  flgDed134: FormControl<ITable4['flgDed134']>;
  codePays135: FormControl<ITable4['codePays135']>;
  libPays136: FormControl<ITable4['libPays136']>;
  codeNationalite137: FormControl<ITable4['codeNationalite137']>;
  libNationalite138: FormControl<ITable4['libNationalite138']>;
  codeSource139: FormControl<ITable4['codeSource139']>;
  libSource140: FormControl<ITable4['libSource140']>;
  codeGrandSource141: FormControl<ITable4['codeGrandSource141']>;
  codeOrigine142: FormControl<ITable4['codeOrigine142']>;
  libOrigine143: FormControl<ITable4['libOrigine143']>;
  codeMarche144: FormControl<ITable4['codeMarche144']>;
  libMarche145: FormControl<ITable4['libMarche145']>;
  codeGrandMarche146: FormControl<ITable4['codeGrandMarche146']>;
  libGrandMarche147: FormControl<ITable4['libGrandMarche147']>;
  codePrix148: FormControl<ITable4['codePrix148']>;
  categPrix149: FormControl<ITable4['categPrix149']>;
  libPrix150: FormControl<ITable4['libPrix150']>;
  numChb151: FormControl<ITable4['numChb151']>;
  descriptionTypeChb152: FormControl<ITable4['descriptionTypeChb152']>;
  codeTypeChb153: FormControl<ITable4['codeTypeChb153']>;
  classChb154: FormControl<ITable4['classChb154']>;
  caractChb155: FormControl<ITable4['caractChb155']>;
  typeChbDeReservation156: FormControl<ITable4['typeChbDeReservation156']>;
  descriptionTypeChbDeResv157: FormControl<ITable4['descriptionTypeChbDeResv157']>;
  codeTypeChbDeResv158: FormControl<ITable4['codeTypeChbDeResv158']>;
  statutDeReservation159: FormControl<ITable4['statutDeReservation159']>;
  circuitDistribution160: FormControl<ITable4['circuitDistribution160']>;
  circuitDistribUserRegroup161: FormControl<ITable4['circuitDistribUserRegroup161']>;
  numCrs162: FormControl<ITable4['numCrs162']>;
  typeRefCrs163: FormControl<ITable4['typeRefCrs163']>;
  crsInsertDate164: FormControl<ITable4['crsInsertDate164']>;
  dateCreaResv165: FormControl<ITable4['dateCreaResv165']>;
  datePremier166: FormControl<ITable4['datePremier166']>;
  statutPremier167: FormControl<ITable4['statutPremier167']>;
  dateDernier168: FormControl<ITable4['dateDernier168']>;
  statutDernier169: FormControl<ITable4['statutDernier169']>;
  dateDernierPseudo170: FormControl<ITable4['dateDernierPseudo170']>;
  statutDernierPseudo171: FormControl<ITable4['statutDernierPseudo171']>;
  diffDtCreaAnn172: FormControl<ITable4['diffDtCreaAnn172']>;
  diffDtArrAnn173: FormControl<ITable4['diffDtArrAnn173']>;
  leadtime174: FormControl<ITable4['leadtime174']>;
  los175: FormControl<ITable4['los175']>;
  occupantsGroupe176: FormControl<ITable4['occupantsGroupe176']>;
  nbNuitee177: FormControl<ITable4['nbNuitee177']>;
  nbNuiteeNnDed178: FormControl<ITable4['nbNuiteeNnDed178']>;
  nbResvAnn179: FormControl<ITable4['nbResvAnn179']>;
  nbAdu180: FormControl<ITable4['nbAdu180']>;
  nbEnf181: FormControl<ITable4['nbEnf181']>;
  nbPersDayU182: FormControl<ITable4['nbPersDayU182']>;
  nbPersArr183: FormControl<ITable4['nbPersArr183']>;
  nbPersDep184: FormControl<ITable4['nbPersDep184']>;
  nbPersAnn185: FormControl<ITable4['nbPersAnn185']>;
  nbPersNoshow186: FormControl<ITable4['nbPersNoshow186']>;
  nbChbDayU187: FormControl<ITable4['nbChbDayU187']>;
  nbChbArr188: FormControl<ITable4['nbChbArr188']>;
  nbChbDep189: FormControl<ITable4['nbChbDep189']>;
  nbChbAnn190: FormControl<ITable4['nbChbAnn190']>;
  nbChbNoshow191: FormControl<ITable4['nbChbNoshow191']>;
  revenuNetChambre192: FormControl<ITable4['revenuNetChambre192']>;
  revenuTaxeChambre193: FormControl<ITable4['revenuTaxeChambre193']>;
  revenuNetChambreGlobal194: FormControl<ITable4['revenuNetChambreGlobal194']>;
  revenuTaxeChambreGlobal195: FormControl<ITable4['revenuTaxeChambreGlobal195']>;
  revenuNetBq196: FormControl<ITable4['revenuNetBq196']>;
  revenuTaxeBq197: FormControl<ITable4['revenuTaxeBq197']>;
  revenuNetBqGlobal198: FormControl<ITable4['revenuNetBqGlobal198']>;
  revenuTaxeBqGlobal199: FormControl<ITable4['revenuTaxeBqGlobal199']>;
  revenuNetExtra200: FormControl<ITable4['revenuNetExtra200']>;
  revenuTaxeExtra201: FormControl<ITable4['revenuTaxeExtra201']>;
  revenuNetExtraGlobal202: FormControl<ITable4['revenuNetExtraGlobal202']>;
  revenuTaxeExtraGlobal203: FormControl<ITable4['revenuTaxeExtraGlobal203']>;
  revenuNetTotal204: FormControl<ITable4['revenuNetTotal204']>;
  revenuTaxeTotal205: FormControl<ITable4['revenuTaxeTotal205']>;
  revenuNetTotalGlobal206: FormControl<ITable4['revenuNetTotalGlobal206']>;
  revenuTaxeTotalGlobal207: FormControl<ITable4['revenuTaxeTotalGlobal207']>;
  prodRevenuChambre208: FormControl<ITable4['prodRevenuChambre208']>;
  prodRevenuBq209: FormControl<ITable4['prodRevenuBq209']>;
  prodRevenuExtra210: FormControl<ITable4['prodRevenuExtra210']>;
  prodRevenuTotal211: FormControl<ITable4['prodRevenuTotal211']>;
  prodChambreNbNuitees212: FormControl<ITable4['prodChambreNbNuitees212']>;
  techCreateDate213: FormControl<ITable4['techCreateDate213']>;
  techUpdateDate214: FormControl<ITable4['techUpdateDate214']>;
  numLigne215: FormControl<ITable4['numLigne215']>;
  resort216: FormControl<ITable4['resort216']>;
  resvNameId217: FormControl<ITable4['resvNameId217']>;
  clientOId218: FormControl<ITable4['clientOId218']>;
  typeChb219: FormControl<ITable4['typeChb219']>;
  confirmationNo220: FormControl<ITable4['confirmationNo220']>;
  clientMdmId221: FormControl<ITable4['clientMdmId221']>;
  nameId222: FormControl<ITable4['nameId222']>;
  parentResvNameId223: FormControl<ITable4['parentResvNameId223']>;
  contactId224: FormControl<ITable4['contactId224']>;
  agenceId225: FormControl<ITable4['agenceId225']>;
  agenceNom226: FormControl<ITable4['agenceNom226']>;
  societeId227: FormControl<ITable4['societeId227']>;
  groupeId228: FormControl<ITable4['groupeId228']>;
  numBloc229: FormControl<ITable4['numBloc229']>;
  typeResv230: FormControl<ITable4['typeResv230']>;
  statutResv231: FormControl<ITable4['statutResv231']>;
  dateDebutResv232: FormControl<ITable4['dateDebutResv232']>;
  dateFinResv233: FormControl<ITable4['dateFinResv233']>;
  truncDateDebutResv234: FormControl<ITable4['truncDateDebutResv234']>;
  truncDateFinResv235: FormControl<ITable4['truncDateFinResv235']>;
  dateAnnResv236: FormControl<ITable4['dateAnnResv236']>;
  pseudoRoomYn237: FormControl<ITable4['pseudoRoomYn237']>;
  createurResv238: FormControl<ITable4['createurResv238']>;
  nomCreateurResv239: FormControl<ITable4['nomCreateurResv239']>;
  codeGarantie240: FormControl<ITable4['codeGarantie240']>;
  flgDed241: FormControl<ITable4['flgDed241']>;
  codePays242: FormControl<ITable4['codePays242']>;
  libPays243: FormControl<ITable4['libPays243']>;
  codeNationalite244: FormControl<ITable4['codeNationalite244']>;
  libNationalite245: FormControl<ITable4['libNationalite245']>;
  codeSource246: FormControl<ITable4['codeSource246']>;
  libSource247: FormControl<ITable4['libSource247']>;
  codeGrandSource248: FormControl<ITable4['codeGrandSource248']>;
  codeOrigine249: FormControl<ITable4['codeOrigine249']>;
  libOrigine250: FormControl<ITable4['libOrigine250']>;
  codeMarche251: FormControl<ITable4['codeMarche251']>;
  libMarche252: FormControl<ITable4['libMarche252']>;
  codeGrandMarche253: FormControl<ITable4['codeGrandMarche253']>;
  libGrandMarche254: FormControl<ITable4['libGrandMarche254']>;
  codePrix255: FormControl<ITable4['codePrix255']>;
  categPrix256: FormControl<ITable4['categPrix256']>;
  libPrix257: FormControl<ITable4['libPrix257']>;
  numChb258: FormControl<ITable4['numChb258']>;
  descriptionTypeChb259: FormControl<ITable4['descriptionTypeChb259']>;
  codeTypeChb260: FormControl<ITable4['codeTypeChb260']>;
  classChb261: FormControl<ITable4['classChb261']>;
  caractChb262: FormControl<ITable4['caractChb262']>;
  typeChbDeReservation263: FormControl<ITable4['typeChbDeReservation263']>;
  descriptionTypeChbDeResv264: FormControl<ITable4['descriptionTypeChbDeResv264']>;
  codeTypeChbDeResv265: FormControl<ITable4['codeTypeChbDeResv265']>;
  statutDeReservation266: FormControl<ITable4['statutDeReservation266']>;
  circuitDistribution267: FormControl<ITable4['circuitDistribution267']>;
  circuitDistribUserRegroup268: FormControl<ITable4['circuitDistribUserRegroup268']>;
  numCrs269: FormControl<ITable4['numCrs269']>;
  typeRefCrs270: FormControl<ITable4['typeRefCrs270']>;
  crsInsertDate271: FormControl<ITable4['crsInsertDate271']>;
  dateCreaResv272: FormControl<ITable4['dateCreaResv272']>;
  datePremier273: FormControl<ITable4['datePremier273']>;
  statutPremier274: FormControl<ITable4['statutPremier274']>;
  dateDernier275: FormControl<ITable4['dateDernier275']>;
  statutDernier276: FormControl<ITable4['statutDernier276']>;
  dateDernierPseudo277: FormControl<ITable4['dateDernierPseudo277']>;
  statutDernierPseudo278: FormControl<ITable4['statutDernierPseudo278']>;
  diffDtCreaAnn279: FormControl<ITable4['diffDtCreaAnn279']>;
  diffDtArrAnn280: FormControl<ITable4['diffDtArrAnn280']>;
  leadtime281: FormControl<ITable4['leadtime281']>;
  los282: FormControl<ITable4['los282']>;
  occupantsGroupe283: FormControl<ITable4['occupantsGroupe283']>;
  nbNuitee284: FormControl<ITable4['nbNuitee284']>;
  nbNuiteeNnDed285: FormControl<ITable4['nbNuiteeNnDed285']>;
  nbResvAnn286: FormControl<ITable4['nbResvAnn286']>;
  nbAdu287: FormControl<ITable4['nbAdu287']>;
  nbEnf288: FormControl<ITable4['nbEnf288']>;
  nbPersDayU289: FormControl<ITable4['nbPersDayU289']>;
  nbPersArr290: FormControl<ITable4['nbPersArr290']>;
  nbPersDep291: FormControl<ITable4['nbPersDep291']>;
  nbPersAnn292: FormControl<ITable4['nbPersAnn292']>;
  nbPersNoshow293: FormControl<ITable4['nbPersNoshow293']>;
  nbChbDayU294: FormControl<ITable4['nbChbDayU294']>;
  nbChbArr295: FormControl<ITable4['nbChbArr295']>;
  nbChbDep296: FormControl<ITable4['nbChbDep296']>;
  nbChbAnn297: FormControl<ITable4['nbChbAnn297']>;
  nbChbNoshow298: FormControl<ITable4['nbChbNoshow298']>;
  revenuNetChambre299: FormControl<ITable4['revenuNetChambre299']>;
  revenuTaxeChambre300: FormControl<ITable4['revenuTaxeChambre300']>;
  revenuNetChambreGlobal301: FormControl<ITable4['revenuNetChambreGlobal301']>;
  revenuTaxeChambreGlobal302: FormControl<ITable4['revenuTaxeChambreGlobal302']>;
  revenuNetBq303: FormControl<ITable4['revenuNetBq303']>;
  revenuTaxeBq304: FormControl<ITable4['revenuTaxeBq304']>;
  revenuNetBqGlobal305: FormControl<ITable4['revenuNetBqGlobal305']>;
  revenuTaxeBqGlobal306: FormControl<ITable4['revenuTaxeBqGlobal306']>;
  revenuNetExtra307: FormControl<ITable4['revenuNetExtra307']>;
  revenuTaxeExtra308: FormControl<ITable4['revenuTaxeExtra308']>;
  revenuNetExtraGlobal309: FormControl<ITable4['revenuNetExtraGlobal309']>;
  revenuTaxeExtraGlobal310: FormControl<ITable4['revenuTaxeExtraGlobal310']>;
};

export type Table4FormGroup = FormGroup<Table4FormGroupContent>;

@Injectable({ providedIn: 'root' })
export class Table4FormService {
  createTable4FormGroup(table4: Table4FormGroupInput = { id: null }): Table4FormGroup {
    const table4RawValue = {
      ...this.getFormDefaults(),
      ...table4,
    };
    return new FormGroup<Table4FormGroupContent>({
      id: new FormControl(
        { value: table4RawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      numLigne1: new FormControl(table4RawValue.numLigne1),
      resort2: new FormControl(table4RawValue.resort2),
      resvNameId3: new FormControl(table4RawValue.resvNameId3),
      clientOId4: new FormControl(table4RawValue.clientOId4),
      typeChb5: new FormControl(table4RawValue.typeChb5),
      confirmationNo6: new FormControl(table4RawValue.confirmationNo6),
      clientMdmId7: new FormControl(table4RawValue.clientMdmId7),
      nameId8: new FormControl(table4RawValue.nameId8),
      parentResvNameId9: new FormControl(table4RawValue.parentResvNameId9),
      contactId10: new FormControl(table4RawValue.contactId10),
      agenceId11: new FormControl(table4RawValue.agenceId11),
      agenceNom12: new FormControl(table4RawValue.agenceNom12),
      societeId13: new FormControl(table4RawValue.societeId13),
      groupeId14: new FormControl(table4RawValue.groupeId14),
      numBloc15: new FormControl(table4RawValue.numBloc15),
      typeResv16: new FormControl(table4RawValue.typeResv16),
      statutResv17: new FormControl(table4RawValue.statutResv17),
      dateDebutResv18: new FormControl(table4RawValue.dateDebutResv18),
      dateFinResv19: new FormControl(table4RawValue.dateFinResv19),
      truncDateDebutResv20: new FormControl(table4RawValue.truncDateDebutResv20),
      truncDateFinResv21: new FormControl(table4RawValue.truncDateFinResv21),
      dateAnnResv22: new FormControl(table4RawValue.dateAnnResv22),
      pseudoRoomYn23: new FormControl(table4RawValue.pseudoRoomYn23),
      createurResv24: new FormControl(table4RawValue.createurResv24),
      nomCreateurResv25: new FormControl(table4RawValue.nomCreateurResv25),
      codeGarantie26: new FormControl(table4RawValue.codeGarantie26),
      flgDed27: new FormControl(table4RawValue.flgDed27),
      codePays28: new FormControl(table4RawValue.codePays28),
      libPays29: new FormControl(table4RawValue.libPays29),
      codeNationalite30: new FormControl(table4RawValue.codeNationalite30),
      libNationalite31: new FormControl(table4RawValue.libNationalite31),
      codeSource32: new FormControl(table4RawValue.codeSource32),
      libSource33: new FormControl(table4RawValue.libSource33),
      codeGrandSource34: new FormControl(table4RawValue.codeGrandSource34),
      codeOrigine35: new FormControl(table4RawValue.codeOrigine35),
      libOrigine36: new FormControl(table4RawValue.libOrigine36),
      codeMarche37: new FormControl(table4RawValue.codeMarche37),
      libMarche38: new FormControl(table4RawValue.libMarche38),
      codeGrandMarche39: new FormControl(table4RawValue.codeGrandMarche39),
      libGrandMarche40: new FormControl(table4RawValue.libGrandMarche40),
      codePrix41: new FormControl(table4RawValue.codePrix41),
      categPrix42: new FormControl(table4RawValue.categPrix42),
      libPrix43: new FormControl(table4RawValue.libPrix43),
      numChb44: new FormControl(table4RawValue.numChb44),
      descriptionTypeChb45: new FormControl(table4RawValue.descriptionTypeChb45),
      codeTypeChb46: new FormControl(table4RawValue.codeTypeChb46),
      classChb47: new FormControl(table4RawValue.classChb47),
      caractChb48: new FormControl(table4RawValue.caractChb48),
      typeChbDeReservation49: new FormControl(table4RawValue.typeChbDeReservation49),
      descriptionTypeChbDeResv50: new FormControl(table4RawValue.descriptionTypeChbDeResv50),
      codeTypeChbDeResv51: new FormControl(table4RawValue.codeTypeChbDeResv51),
      statutDeReservation52: new FormControl(table4RawValue.statutDeReservation52),
      circuitDistribution53: new FormControl(table4RawValue.circuitDistribution53),
      circuitDistribUserRegroup54: new FormControl(table4RawValue.circuitDistribUserRegroup54),
      numCrs55: new FormControl(table4RawValue.numCrs55),
      typeRefCrs56: new FormControl(table4RawValue.typeRefCrs56),
      crsInsertDate57: new FormControl(table4RawValue.crsInsertDate57),
      dateCreaResv58: new FormControl(table4RawValue.dateCreaResv58),
      datePremier59: new FormControl(table4RawValue.datePremier59),
      statutPremier60: new FormControl(table4RawValue.statutPremier60),
      dateDernier61: new FormControl(table4RawValue.dateDernier61),
      statutDernier62: new FormControl(table4RawValue.statutDernier62),
      dateDernierPseudo63: new FormControl(table4RawValue.dateDernierPseudo63),
      statutDernierPseudo64: new FormControl(table4RawValue.statutDernierPseudo64),
      diffDtCreaAnn65: new FormControl(table4RawValue.diffDtCreaAnn65),
      diffDtArrAnn66: new FormControl(table4RawValue.diffDtArrAnn66),
      leadtime67: new FormControl(table4RawValue.leadtime67),
      los68: new FormControl(table4RawValue.los68),
      occupantsGroupe69: new FormControl(table4RawValue.occupantsGroupe69),
      nbNuitee70: new FormControl(table4RawValue.nbNuitee70),
      nbNuiteeNnDed71: new FormControl(table4RawValue.nbNuiteeNnDed71),
      nbResvAnn72: new FormControl(table4RawValue.nbResvAnn72),
      nbAdu73: new FormControl(table4RawValue.nbAdu73),
      nbEnf74: new FormControl(table4RawValue.nbEnf74),
      nbPersDayU75: new FormControl(table4RawValue.nbPersDayU75),
      nbPersArr76: new FormControl(table4RawValue.nbPersArr76),
      nbPersDep77: new FormControl(table4RawValue.nbPersDep77),
      nbPersAnn78: new FormControl(table4RawValue.nbPersAnn78),
      nbPersNoshow79: new FormControl(table4RawValue.nbPersNoshow79),
      nbChbDayU80: new FormControl(table4RawValue.nbChbDayU80),
      nbChbArr81: new FormControl(table4RawValue.nbChbArr81),
      nbChbDep82: new FormControl(table4RawValue.nbChbDep82),
      nbChbAnn83: new FormControl(table4RawValue.nbChbAnn83),
      nbChbNoshow84: new FormControl(table4RawValue.nbChbNoshow84),
      revenuNetChambre85: new FormControl(table4RawValue.revenuNetChambre85),
      revenuTaxeChambre86: new FormControl(table4RawValue.revenuTaxeChambre86),
      revenuNetChambreGlobal87: new FormControl(table4RawValue.revenuNetChambreGlobal87),
      revenuTaxeChambreGlobal88: new FormControl(table4RawValue.revenuTaxeChambreGlobal88),
      revenuNetBq89: new FormControl(table4RawValue.revenuNetBq89),
      revenuTaxeBq90: new FormControl(table4RawValue.revenuTaxeBq90),
      revenuNetBqGlobal91: new FormControl(table4RawValue.revenuNetBqGlobal91),
      revenuTaxeBqGlobal92: new FormControl(table4RawValue.revenuTaxeBqGlobal92),
      revenuNetExtra93: new FormControl(table4RawValue.revenuNetExtra93),
      revenuTaxeExtra94: new FormControl(table4RawValue.revenuTaxeExtra94),
      revenuNetExtraGlobal95: new FormControl(table4RawValue.revenuNetExtraGlobal95),
      revenuTaxeExtraGlobal96: new FormControl(table4RawValue.revenuTaxeExtraGlobal96),
      revenuNetTotal97: new FormControl(table4RawValue.revenuNetTotal97),
      revenuTaxeTotal98: new FormControl(table4RawValue.revenuTaxeTotal98),
      revenuNetTotalGlobal99: new FormControl(table4RawValue.revenuNetTotalGlobal99),
      revenuTaxeTotalGlobal100: new FormControl(table4RawValue.revenuTaxeTotalGlobal100),
      prodRevenuChambre101: new FormControl(table4RawValue.prodRevenuChambre101),
      prodRevenuBq102: new FormControl(table4RawValue.prodRevenuBq102),
      prodRevenuExtra103: new FormControl(table4RawValue.prodRevenuExtra103),
      prodRevenuTotal104: new FormControl(table4RawValue.prodRevenuTotal104),
      prodChambreNbNuitees105: new FormControl(table4RawValue.prodChambreNbNuitees105),
      techCreateDate106: new FormControl(table4RawValue.techCreateDate106),
      techUpdateDate107: new FormControl(table4RawValue.techUpdateDate107),
      numLigne108: new FormControl(table4RawValue.numLigne108),
      resort109: new FormControl(table4RawValue.resort109),
      resvNameId110: new FormControl(table4RawValue.resvNameId110),
      clientOId111: new FormControl(table4RawValue.clientOId111),
      typeChb112: new FormControl(table4RawValue.typeChb112),
      confirmationNo113: new FormControl(table4RawValue.confirmationNo113),
      clientMdmId114: new FormControl(table4RawValue.clientMdmId114),
      nameId115: new FormControl(table4RawValue.nameId115),
      parentResvNameId116: new FormControl(table4RawValue.parentResvNameId116),
      contactId117: new FormControl(table4RawValue.contactId117),
      agenceId118: new FormControl(table4RawValue.agenceId118),
      agenceNom119: new FormControl(table4RawValue.agenceNom119),
      societeId120: new FormControl(table4RawValue.societeId120),
      groupeId121: new FormControl(table4RawValue.groupeId121),
      numBloc122: new FormControl(table4RawValue.numBloc122),
      typeResv123: new FormControl(table4RawValue.typeResv123),
      statutResv124: new FormControl(table4RawValue.statutResv124),
      dateDebutResv125: new FormControl(table4RawValue.dateDebutResv125),
      dateFinResv126: new FormControl(table4RawValue.dateFinResv126),
      truncDateDebutResv127: new FormControl(table4RawValue.truncDateDebutResv127),
      truncDateFinResv128: new FormControl(table4RawValue.truncDateFinResv128),
      dateAnnResv129: new FormControl(table4RawValue.dateAnnResv129),
      pseudoRoomYn130: new FormControl(table4RawValue.pseudoRoomYn130),
      createurResv131: new FormControl(table4RawValue.createurResv131),
      nomCreateurResv132: new FormControl(table4RawValue.nomCreateurResv132),
      codeGarantie133: new FormControl(table4RawValue.codeGarantie133),
      flgDed134: new FormControl(table4RawValue.flgDed134),
      codePays135: new FormControl(table4RawValue.codePays135),
      libPays136: new FormControl(table4RawValue.libPays136),
      codeNationalite137: new FormControl(table4RawValue.codeNationalite137),
      libNationalite138: new FormControl(table4RawValue.libNationalite138),
      codeSource139: new FormControl(table4RawValue.codeSource139),
      libSource140: new FormControl(table4RawValue.libSource140),
      codeGrandSource141: new FormControl(table4RawValue.codeGrandSource141),
      codeOrigine142: new FormControl(table4RawValue.codeOrigine142),
      libOrigine143: new FormControl(table4RawValue.libOrigine143),
      codeMarche144: new FormControl(table4RawValue.codeMarche144),
      libMarche145: new FormControl(table4RawValue.libMarche145),
      codeGrandMarche146: new FormControl(table4RawValue.codeGrandMarche146),
      libGrandMarche147: new FormControl(table4RawValue.libGrandMarche147),
      codePrix148: new FormControl(table4RawValue.codePrix148),
      categPrix149: new FormControl(table4RawValue.categPrix149),
      libPrix150: new FormControl(table4RawValue.libPrix150),
      numChb151: new FormControl(table4RawValue.numChb151),
      descriptionTypeChb152: new FormControl(table4RawValue.descriptionTypeChb152),
      codeTypeChb153: new FormControl(table4RawValue.codeTypeChb153),
      classChb154: new FormControl(table4RawValue.classChb154),
      caractChb155: new FormControl(table4RawValue.caractChb155),
      typeChbDeReservation156: new FormControl(table4RawValue.typeChbDeReservation156),
      descriptionTypeChbDeResv157: new FormControl(table4RawValue.descriptionTypeChbDeResv157),
      codeTypeChbDeResv158: new FormControl(table4RawValue.codeTypeChbDeResv158),
      statutDeReservation159: new FormControl(table4RawValue.statutDeReservation159),
      circuitDistribution160: new FormControl(table4RawValue.circuitDistribution160),
      circuitDistribUserRegroup161: new FormControl(table4RawValue.circuitDistribUserRegroup161),
      numCrs162: new FormControl(table4RawValue.numCrs162),
      typeRefCrs163: new FormControl(table4RawValue.typeRefCrs163),
      crsInsertDate164: new FormControl(table4RawValue.crsInsertDate164),
      dateCreaResv165: new FormControl(table4RawValue.dateCreaResv165),
      datePremier166: new FormControl(table4RawValue.datePremier166),
      statutPremier167: new FormControl(table4RawValue.statutPremier167),
      dateDernier168: new FormControl(table4RawValue.dateDernier168),
      statutDernier169: new FormControl(table4RawValue.statutDernier169),
      dateDernierPseudo170: new FormControl(table4RawValue.dateDernierPseudo170),
      statutDernierPseudo171: new FormControl(table4RawValue.statutDernierPseudo171),
      diffDtCreaAnn172: new FormControl(table4RawValue.diffDtCreaAnn172),
      diffDtArrAnn173: new FormControl(table4RawValue.diffDtArrAnn173),
      leadtime174: new FormControl(table4RawValue.leadtime174),
      los175: new FormControl(table4RawValue.los175),
      occupantsGroupe176: new FormControl(table4RawValue.occupantsGroupe176),
      nbNuitee177: new FormControl(table4RawValue.nbNuitee177),
      nbNuiteeNnDed178: new FormControl(table4RawValue.nbNuiteeNnDed178),
      nbResvAnn179: new FormControl(table4RawValue.nbResvAnn179),
      nbAdu180: new FormControl(table4RawValue.nbAdu180),
      nbEnf181: new FormControl(table4RawValue.nbEnf181),
      nbPersDayU182: new FormControl(table4RawValue.nbPersDayU182),
      nbPersArr183: new FormControl(table4RawValue.nbPersArr183),
      nbPersDep184: new FormControl(table4RawValue.nbPersDep184),
      nbPersAnn185: new FormControl(table4RawValue.nbPersAnn185),
      nbPersNoshow186: new FormControl(table4RawValue.nbPersNoshow186),
      nbChbDayU187: new FormControl(table4RawValue.nbChbDayU187),
      nbChbArr188: new FormControl(table4RawValue.nbChbArr188),
      nbChbDep189: new FormControl(table4RawValue.nbChbDep189),
      nbChbAnn190: new FormControl(table4RawValue.nbChbAnn190),
      nbChbNoshow191: new FormControl(table4RawValue.nbChbNoshow191),
      revenuNetChambre192: new FormControl(table4RawValue.revenuNetChambre192),
      revenuTaxeChambre193: new FormControl(table4RawValue.revenuTaxeChambre193),
      revenuNetChambreGlobal194: new FormControl(table4RawValue.revenuNetChambreGlobal194),
      revenuTaxeChambreGlobal195: new FormControl(table4RawValue.revenuTaxeChambreGlobal195),
      revenuNetBq196: new FormControl(table4RawValue.revenuNetBq196),
      revenuTaxeBq197: new FormControl(table4RawValue.revenuTaxeBq197),
      revenuNetBqGlobal198: new FormControl(table4RawValue.revenuNetBqGlobal198),
      revenuTaxeBqGlobal199: new FormControl(table4RawValue.revenuTaxeBqGlobal199),
      revenuNetExtra200: new FormControl(table4RawValue.revenuNetExtra200),
      revenuTaxeExtra201: new FormControl(table4RawValue.revenuTaxeExtra201),
      revenuNetExtraGlobal202: new FormControl(table4RawValue.revenuNetExtraGlobal202),
      revenuTaxeExtraGlobal203: new FormControl(table4RawValue.revenuTaxeExtraGlobal203),
      revenuNetTotal204: new FormControl(table4RawValue.revenuNetTotal204),
      revenuTaxeTotal205: new FormControl(table4RawValue.revenuTaxeTotal205),
      revenuNetTotalGlobal206: new FormControl(table4RawValue.revenuNetTotalGlobal206),
      revenuTaxeTotalGlobal207: new FormControl(table4RawValue.revenuTaxeTotalGlobal207),
      prodRevenuChambre208: new FormControl(table4RawValue.prodRevenuChambre208),
      prodRevenuBq209: new FormControl(table4RawValue.prodRevenuBq209),
      prodRevenuExtra210: new FormControl(table4RawValue.prodRevenuExtra210),
      prodRevenuTotal211: new FormControl(table4RawValue.prodRevenuTotal211),
      prodChambreNbNuitees212: new FormControl(table4RawValue.prodChambreNbNuitees212),
      techCreateDate213: new FormControl(table4RawValue.techCreateDate213),
      techUpdateDate214: new FormControl(table4RawValue.techUpdateDate214),
      numLigne215: new FormControl(table4RawValue.numLigne215),
      resort216: new FormControl(table4RawValue.resort216),
      resvNameId217: new FormControl(table4RawValue.resvNameId217),
      clientOId218: new FormControl(table4RawValue.clientOId218),
      typeChb219: new FormControl(table4RawValue.typeChb219),
      confirmationNo220: new FormControl(table4RawValue.confirmationNo220),
      clientMdmId221: new FormControl(table4RawValue.clientMdmId221),
      nameId222: new FormControl(table4RawValue.nameId222),
      parentResvNameId223: new FormControl(table4RawValue.parentResvNameId223),
      contactId224: new FormControl(table4RawValue.contactId224),
      agenceId225: new FormControl(table4RawValue.agenceId225),
      agenceNom226: new FormControl(table4RawValue.agenceNom226),
      societeId227: new FormControl(table4RawValue.societeId227),
      groupeId228: new FormControl(table4RawValue.groupeId228),
      numBloc229: new FormControl(table4RawValue.numBloc229),
      typeResv230: new FormControl(table4RawValue.typeResv230),
      statutResv231: new FormControl(table4RawValue.statutResv231),
      dateDebutResv232: new FormControl(table4RawValue.dateDebutResv232),
      dateFinResv233: new FormControl(table4RawValue.dateFinResv233),
      truncDateDebutResv234: new FormControl(table4RawValue.truncDateDebutResv234),
      truncDateFinResv235: new FormControl(table4RawValue.truncDateFinResv235),
      dateAnnResv236: new FormControl(table4RawValue.dateAnnResv236),
      pseudoRoomYn237: new FormControl(table4RawValue.pseudoRoomYn237),
      createurResv238: new FormControl(table4RawValue.createurResv238),
      nomCreateurResv239: new FormControl(table4RawValue.nomCreateurResv239),
      codeGarantie240: new FormControl(table4RawValue.codeGarantie240),
      flgDed241: new FormControl(table4RawValue.flgDed241),
      codePays242: new FormControl(table4RawValue.codePays242),
      libPays243: new FormControl(table4RawValue.libPays243),
      codeNationalite244: new FormControl(table4RawValue.codeNationalite244),
      libNationalite245: new FormControl(table4RawValue.libNationalite245),
      codeSource246: new FormControl(table4RawValue.codeSource246),
      libSource247: new FormControl(table4RawValue.libSource247),
      codeGrandSource248: new FormControl(table4RawValue.codeGrandSource248),
      codeOrigine249: new FormControl(table4RawValue.codeOrigine249),
      libOrigine250: new FormControl(table4RawValue.libOrigine250),
      codeMarche251: new FormControl(table4RawValue.codeMarche251),
      libMarche252: new FormControl(table4RawValue.libMarche252),
      codeGrandMarche253: new FormControl(table4RawValue.codeGrandMarche253),
      libGrandMarche254: new FormControl(table4RawValue.libGrandMarche254),
      codePrix255: new FormControl(table4RawValue.codePrix255),
      categPrix256: new FormControl(table4RawValue.categPrix256),
      libPrix257: new FormControl(table4RawValue.libPrix257),
      numChb258: new FormControl(table4RawValue.numChb258),
      descriptionTypeChb259: new FormControl(table4RawValue.descriptionTypeChb259),
      codeTypeChb260: new FormControl(table4RawValue.codeTypeChb260),
      classChb261: new FormControl(table4RawValue.classChb261),
      caractChb262: new FormControl(table4RawValue.caractChb262),
      typeChbDeReservation263: new FormControl(table4RawValue.typeChbDeReservation263),
      descriptionTypeChbDeResv264: new FormControl(table4RawValue.descriptionTypeChbDeResv264),
      codeTypeChbDeResv265: new FormControl(table4RawValue.codeTypeChbDeResv265),
      statutDeReservation266: new FormControl(table4RawValue.statutDeReservation266),
      circuitDistribution267: new FormControl(table4RawValue.circuitDistribution267),
      circuitDistribUserRegroup268: new FormControl(table4RawValue.circuitDistribUserRegroup268),
      numCrs269: new FormControl(table4RawValue.numCrs269),
      typeRefCrs270: new FormControl(table4RawValue.typeRefCrs270),
      crsInsertDate271: new FormControl(table4RawValue.crsInsertDate271),
      dateCreaResv272: new FormControl(table4RawValue.dateCreaResv272),
      datePremier273: new FormControl(table4RawValue.datePremier273),
      statutPremier274: new FormControl(table4RawValue.statutPremier274),
      dateDernier275: new FormControl(table4RawValue.dateDernier275),
      statutDernier276: new FormControl(table4RawValue.statutDernier276),
      dateDernierPseudo277: new FormControl(table4RawValue.dateDernierPseudo277),
      statutDernierPseudo278: new FormControl(table4RawValue.statutDernierPseudo278),
      diffDtCreaAnn279: new FormControl(table4RawValue.diffDtCreaAnn279),
      diffDtArrAnn280: new FormControl(table4RawValue.diffDtArrAnn280),
      leadtime281: new FormControl(table4RawValue.leadtime281),
      los282: new FormControl(table4RawValue.los282),
      occupantsGroupe283: new FormControl(table4RawValue.occupantsGroupe283),
      nbNuitee284: new FormControl(table4RawValue.nbNuitee284),
      nbNuiteeNnDed285: new FormControl(table4RawValue.nbNuiteeNnDed285),
      nbResvAnn286: new FormControl(table4RawValue.nbResvAnn286),
      nbAdu287: new FormControl(table4RawValue.nbAdu287),
      nbEnf288: new FormControl(table4RawValue.nbEnf288),
      nbPersDayU289: new FormControl(table4RawValue.nbPersDayU289),
      nbPersArr290: new FormControl(table4RawValue.nbPersArr290),
      nbPersDep291: new FormControl(table4RawValue.nbPersDep291),
      nbPersAnn292: new FormControl(table4RawValue.nbPersAnn292),
      nbPersNoshow293: new FormControl(table4RawValue.nbPersNoshow293),
      nbChbDayU294: new FormControl(table4RawValue.nbChbDayU294),
      nbChbArr295: new FormControl(table4RawValue.nbChbArr295),
      nbChbDep296: new FormControl(table4RawValue.nbChbDep296),
      nbChbAnn297: new FormControl(table4RawValue.nbChbAnn297),
      nbChbNoshow298: new FormControl(table4RawValue.nbChbNoshow298),
      revenuNetChambre299: new FormControl(table4RawValue.revenuNetChambre299),
      revenuTaxeChambre300: new FormControl(table4RawValue.revenuTaxeChambre300),
      revenuNetChambreGlobal301: new FormControl(table4RawValue.revenuNetChambreGlobal301),
      revenuTaxeChambreGlobal302: new FormControl(table4RawValue.revenuTaxeChambreGlobal302),
      revenuNetBq303: new FormControl(table4RawValue.revenuNetBq303),
      revenuTaxeBq304: new FormControl(table4RawValue.revenuTaxeBq304),
      revenuNetBqGlobal305: new FormControl(table4RawValue.revenuNetBqGlobal305),
      revenuTaxeBqGlobal306: new FormControl(table4RawValue.revenuTaxeBqGlobal306),
      revenuNetExtra307: new FormControl(table4RawValue.revenuNetExtra307),
      revenuTaxeExtra308: new FormControl(table4RawValue.revenuTaxeExtra308),
      revenuNetExtraGlobal309: new FormControl(table4RawValue.revenuNetExtraGlobal309),
      revenuTaxeExtraGlobal310: new FormControl(table4RawValue.revenuTaxeExtraGlobal310),
    });
  }

  getTable4(form: Table4FormGroup): ITable4 | NewTable4 {
    return form.getRawValue() as ITable4 | NewTable4;
  }

  resetForm(form: Table4FormGroup, table4: Table4FormGroupInput): void {
    const table4RawValue = { ...this.getFormDefaults(), ...table4 };
    form.reset(
      {
        ...table4RawValue,
        id: { value: table4RawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): Table4FormDefaults {
    return {
      id: null,
    };
  }
}
