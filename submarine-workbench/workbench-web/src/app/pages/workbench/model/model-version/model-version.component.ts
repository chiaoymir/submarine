/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperimentService } from '@submarine/services/experiment.service';

@Component({
  selector: 'submarine-model-version',
  templateUrl: './model-version.component.html',
  styleUrls: ['./model-version.component.scss'],
})
export class ModelVersionComponent implements OnInit {
  isLoading = true;
  modelName;
  modelVersion;

  constructor(private router: Router, private route: ActivatedRoute, private experimentService: ExperimentService) {}

  ngOnInit() {
    this.modelName = this.route.snapshot.params.name;
    this.modelVersion = this.route.snapshot.params.version;
    this.experimentService.emitInfo(this.modelName);
  }
}
