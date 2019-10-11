/**
 * File created by suenlue on 2019-10-11.
 * Copyright (c) 2019 by netTrek GmbH & Co. KG
 */
import { InjectionToken } from '@angular/core';
import { TestInt } from './app.module';

export const MY_NAME: InjectionToken<string> =
               new InjectionToken ( 'Name des Entwicklers' );
export const NAMES: InjectionToken<string> =
               new InjectionToken ( 'Namen' );
export const MY_CLASS_SAMPLE: InjectionToken<TestInt> =
               new InjectionToken ( 'meine Klasse' );
export const MY_FAC_SAMPLE: InjectionToken<number> =
               new InjectionToken ( 'meine Klasse' );

