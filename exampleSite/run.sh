#! /bin/sh
# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#+ Autor:  	Ran#
#+ Creado: 	2022/03/22 22:49:09.497900
#+ Editado:	2022/04/29 18:42:22.513903
# ------------------------------------------------------------------------------
hugo --themesDir=../.. serve --bind=$1 --baseURL=http://$1:1313
# ------------------------------------------------------------------------------
